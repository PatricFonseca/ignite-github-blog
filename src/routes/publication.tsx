/*
 Modulo não está sendo utilizado, estava pensando em utilizar um loader, porém não foi necessario
 posteriormente para estudos pode ser implementeado
*/

interface Publication {
  publicationId: string
}

interface ILoaderProps {
  params: Publication
}

export async function loaderPublication({ params }: ILoaderProps) {
  console.log(params.publicationId)
  // const publication = await getPublication(params.publicationId)
  // return publication
  return null
}
