try{
  var { pdfjsLib } = globalThis;
  
  pdfjsLib.GlobalWorkerOptions.workerSrc = "js/pdf.worker.mjs";
  
  let pdfDoc = null,
    pageNum = 1,
    pageIsRendering = false,
    pageNumIsPending = null;
    
  const scale = 1,
    canvas = document.getElementById("pdf-render"),
    ctx = canvas.getContext("2d");
  
  
  // Render the page
  const renderPage = num => {
    pageIsRendering = true;
    
    // Get page
    pdfDoc.getPage(num).then(page => {
      // Set scale
      const viewport = page.getViewport({ scale });
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      
      const renderCtx = {
        canvasContext: ctx,
        viewport
      }
      
      page.render(renderCtx).promise.then(() => {
        pageIsRendering = false;
        
        if(pageNumIsPending !== null){
          renderPage(pageNumIsPending);
          pageNumIsPending = null;
        }
      });
    });
  };
  
  // Get document
  function renderPdf(url){
    pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
      pdfDoc = pdfDoc_;
    
      renderPage(pageNum);
    });
  };
} catch(err){
  console.log(err.message);
}