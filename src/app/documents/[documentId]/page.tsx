  interface DocumentIdPageProps {
    params: Promise<{ documentId: string}>
  }


  const DocumentPage = async ({params}: DocumentIdPageProps) => {
    
    const {documentId} = await params;



    return (
      <div>DocumentId : {documentId}</div>
    )
  }
  
  export default DocumentPage