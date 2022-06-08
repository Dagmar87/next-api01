// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  /*
  console.log(req)
  
  res.status(200).json([
    {
      name: "José Dagmar",
      idade: "34"
    },
    {
      name: "Carlos Saulo",
      idade: "21"
    }
  ])
  */
 /*-----------------------------*/
 
 let data = [
   { name: "Leandro"},
   { name: "Juliana"},
   { name: "Kelvin"},
 ]

 if(req.method === 'POST'){

   const novoUsuario = req.body.name

   if(novoUsuario === "") {
     return res.status(400).json({
       mensagem: "O nome do novo usuário precisa ser válido!"
     })
   }

   data.push({ name: novoUsuario })

   return res.status(200).json(data)
 }
}
