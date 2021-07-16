import { SiteClient } from "datocms-client";

export default async function recebedorDeRequests(request, response) {
    if (request.method === "POST") {
        const TOKEN = "4ca3304eb0159f060ab00931288417";
        const client = new SiteClient(TOKEN);

        // Validar os dados, antes de sair cadastrando
        const registroCriado = await client.items.create({
            itemType: "968394", // ID do Model de "Communities" criado pelo Dato
            ...request.body,
            // title: "Comunidade de Teste",
            // imageUrl: "https://github.com/omariosouto.png",
            // creatorSlug: "omariosouto"
        });

        console.log(registroCriado);

        response.json({
            dados: "Algum dado qualquer",
            registroCriado: registroCriado,
        });
        return;
    }

    response.status(404).json({
        message: "Ainda não temos nada no GET, mas no POST tem!",
    });
}
