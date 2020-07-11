import { GoogleSpreadsheet } from "google-spreadsheet";

import credentials from "../../credentials.json";
import moment from "moment";

const doc = new GoogleSpreadsheet(
  "1G_U7ODPp3tY22lO5fhURhxCtos6VAvQcGUJvRMsX1eE"
);

export default async(req, res) => {
    
  const genCupon = () => {
    const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
    return code.substr(0,4) + '-' + code.substr(4,4) + '-' + code.substr(8,4)
  }

    try{
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    
    const sheet = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)

    const sheetConfig = doc.sheetsByIndex[2];
    await sheetConfig.loadCells("A3:B3");
    const mostrarPromocaoCell = sheetConfig.getCell(2, 0);
    const textoCell = sheetConfig.getCell(2, 1);

    let Cupom = ''
    let Promo = ''

    if(mostrarPromocaoCell.value === 'VERDADEIRO'){
      //TO DO gerar cupom
      Cupom = genCupon()
      Promo = textoCell.value
    }
    await sheet.addRow({
        Nome: data.Nome,
        Email: data.Email,
        Whatsapp: data.Whatsapp,
        Nota: parseInt(data.Nota),
        'Data Preenchimento': moment().format('DD/MM/YYYY HH:mm:ss'),
        Cupom,
        Promo
    })
    res.end(JSON.stringify({
      showCoupon: Cupom !== '',
      Cupom,
      Promo
    }))
    }catch(err){
      console.log(err)
      res.end('error')
    }
  }   

