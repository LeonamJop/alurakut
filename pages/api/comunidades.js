import { SiteClient } from 'datocms-client';

export default async function rescebedorDeRequests(request, response) {
    if (request.method === 'POST') {
        const TOKEN = '36caa29b36f1cd36e0dc2e30e65b48'
        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
            itemType: "975841", //ID dp Model de "Comnunidades" é criado pelo Dato
            ...request.body,
            // title: "Comunidade de Teste",
            // imageUrl: "https://github.com/leonamjop.png",
            // creatorSlug: "Leonam"
        })

        console.log(registroCriado);

        response.json({
            dados: "Algum dado qualquer",
            registroCriado: registroCriado,
        })
        return;
    }
    response.status(404).json({
        message: 'Não tem nada no GET, mas no POST tem!'
    })
}