// (1. módszer)
function paralelogrammaTerulet1(a: number, m: number): number {
   
    const terület = a * m;
  
    return terület;
  }
  
  // (2. módszer)
  function paralelogrammaTerulet2(a: number, b: number, szög: number): number {
    // Szöget radiánba konvertáljuk, mert a kód azt követeli majd meg
    const szögRad = (szög * Math.PI) / 180;
  
    const terület = a * b * Math.sin(szögRad);
  
    return terület;
  }

  function updateHtmlContent(area: number): void {
 
    const resultElement = document.getElementById('result');
    if (resultElement) {
      resultElement.innerText = `Paralelogramma területe: ${area}`;
    }
  }  