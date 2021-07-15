import { SiteClient } from 'datocms-client';


export default async function recebedorDeRequests(req, res) {

    if(req.method == 'POST') {

        const TOKEN = "4ca3304eb0159f060ab00931288417";
        const client = new SiteClient(TOKEN);

        const registroCriado = await client.itemsCreate({
            itemType: "968394",
            ...request.body,
            // title: "",
            // imageURL: "",
            // creatorSlug: ""
        });

        response.json({
            dados: 'dados',
            registroCriado: registroCriado,
        })

        return;
}


}