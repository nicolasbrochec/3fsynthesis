//entrées
inlets = 1;

//sorties
outlets = 1;

//CALCULS DES HARMONIQUES
//------------------------------------------------------------------//
//                                NIVEAUX                           //
//------------------------------------------------------------------//
//VARIABLES
var A1, A2, A3, B1, B2, B3, B4, B5, B6, B7, B8, B9, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C14, C15, C16, C17, C18, D1, D2, D3, D4, D5, D6, D7, D8, D9, D10, D11, D12, D13, D14, D15, D16, D17, D18, D19, 
D20, D21, D22, D23, D24, D25, D26, D27, D28, D29, D30, D31, D32, D33, E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11, E12, E13, E14, E15, E16, E17, E18, E19, 
E20, E21, E22, E23, E24, E25, E26, E27, E28, E29, E30, E31, E32, E33, E34, E35, E36, E37, E38, E39, 
E40, E41, E42, E43, E44, E45, E46, E47, E48, E49, E50, E51, E52;


function synth3f(f, g, h, z) {
//NIVEAU1
      A1 = f;
      A2 = g;
      A3 = h;
//NIVEAU2
      B1 = Math.abs(2*f);
      B2 = Math.abs(f+g);
      B3 = Math.abs(f-g);
      B4 = Math.abs(f+h);
      B5 = Math.abs(f-h);
      B6 = Math.abs(2*g);
      B7 = Math.abs(g+h);
      B8 = Math.abs(g-h);
      B9 = Math.abs(2*h);
//NIVEAU3
      C1 = Math.abs(3*f);
      C2 = Math.abs(2*f+g);
      C3 = Math.abs(2*f-g);
      C4 = Math.abs(2*f+h);
      C5 = Math.abs(2*f-h);
      C6 = Math.abs(2*g+f);
      C7 = Math.abs(2*g-f);
      C8 = Math.abs(f+g-h);
      C9 = Math.abs(f+g+h);
      C10 = Math.abs(2*g+h);
      C11 = Math.abs(3*g);
      C12 = Math.abs(2*h+f);
      C13 = Math.abs(2*h-f);
      C14 = Math.abs(f-g+h);
      C15 = Math.abs(f-g-h);
      C16 = Math.abs(2*h+g);
      C17 = Math.abs(2*h-g);
      C18 = Math.abs(3*h);
//NIVEAU4
      D1 = Math.abs(4*f);
      D2 = Math.abs((3*f)+g);
      D3 = Math.abs((3*f)-g);
      D4 = Math.abs((3*f)+h);
      D5 = Math.abs((3*f)-h);
      D6 = Math.abs((2*f)+(2*g));
      D7 = Math.abs((2*f)+g+h);
      D8 = Math.abs((2*f)+g-h);
      D9 = Math.abs((2*f)+(2*h));
      D10 = Math.abs((2*f)-g+h);
      D11 = Math.abs((2*f)-(2*g));
      D12 = Math.abs((2*f)-g-h);
      D13 = Math.abs((2*f)-(2*h))
      D14 = Math.abs(f+(3*g));
      D15 = Math.abs(f+(2*g)+h);
      D16 = Math.abs(f+(2*g)-h);
      D17 = Math.abs(f+g+(2*h));
      D18 = Math.abs(f+g-(2*h));
      D19 = Math.abs(f+(3*h));
      D20 = Math.abs(f-g+(2*h));
      D21 = Math.abs(f-(2*g)+h);
      D22 = Math.abs(f-(3*g));
      D23 = Math.abs(f-(2*g)-h);
      D24 = Math.abs(f-g-(2*h));
      D25 = Math.abs(f-(3*h));
      D26 = Math.abs(4*g);
      D27 = Math.abs((3*g)+h);
      D28 = Math.abs((3*g)-h);
      D29 = Math.abs((2*g)+(2*h));
      D30 = Math.abs((2*g)-(2*h));
      D31 = Math.abs(g+(3*h));
      D32 = Math.abs(g-(3*h));
      D33 = Math.abs(4*h);
//NIVEAU5
      E1 = Math.abs(5*f);
      E2 = Math.abs(4*f+g);
      E3 = Math.abs(4*f-g);
      E4 = Math.abs(4*f+h);
      E5 = Math.abs(4*f-h);
      E6 = Math.abs(3*f+2*g);
      E7 = Math.abs(3*f+g+h);
      E8 = Math.abs(3*f+g-h);
      E9 = Math.abs(3*f+2*h);
      E10 = Math.abs(3*f-g+h);
      E11 = Math.abs(3*f-2*g);
      E12 = Math.abs(3*f-g-h);
      E13 = Math.abs(3*f-2*h);
      E14 = Math.abs(2*f+3*g);
      E15 = Math.abs(2*f+2*g+h);
      E16 = Math.abs(2*f+2*g-h);
      E17 = Math.abs(2*f+g+2*h);
      E18 = Math.abs(2*f+g-2*h);
      E19 = Math.abs(2*f+3*h);
      E20 = Math.abs(2*f-g+2*h);
      E21 = Math.abs(2*f-2*g+2*h);
      E22 = Math.abs(2*f-3*g);
      E23 = Math.abs(2*f-2*g-h);
      E24 = Math.abs(2*f-g-2*h);
      E25 = Math.abs(2*f-3*h);
      E26 = Math.abs(f+4*g);
      E27 = Math.abs(f+3*g+h);
      E28 = Math.abs(f+3*g-h);
      E29 = Math.abs(f+2*g+2*h);
      E30 = Math.abs(f+2*g-2*h);
      E31 = Math.abs(f+g+3*h);
      E32 = Math.abs(f+g-3*h);
      E33 = Math.abs(f+4*h);
      E34 = Math.abs(f-g+3*h);
      E35 = Math.abs(f-2*g+2*h);
      E36 = Math.abs(f-3*g+h);
      E37 = Math.abs(f-4*g);
      E38 = Math.abs(f-3*g-h);
      E39 = Math.abs(f-2*g-2*h);
      E40 = Math.abs(f-g-3*h);
      E41 = Math.abs(f-4*h);
      E42 = Math.abs(5*g);
      E43 = Math.abs(4*g+h);
      E44 = Math.abs(4*g-h);
      E45 = Math.abs(3*g+2*h);
      E46 = Math.abs(3*g-2*h);
      E47 = Math.abs(2*g+3*h);
      E48 = Math.abs(2*g-3*h);
      E49 = Math.abs(2*f+3*h);
      E50 = Math.abs(g+4*h);
      E51 = Math.abs(g-4*h);
      E52 = Math.abs(5*h);
//TABLEAU
      tab = new Array();
      tab = [A1, A2, A3, 
      B1, B2, B3, B4, B5, B6, B7, B8, B9,
      C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C14, C15, C16, C17, C18, 
      D1, D2, D3, D4, D5, D6, D7, D8, D9, D10, D11, D12, D13, D14, D15, D16, D17, D18, D19, D20, D21, D22, D23, D24, D25, D26, D27, D28, D29, D30, D31, D32, D33,
      E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11, E12, E13, E14, E15, E16, E17, E18, E19, E20, E21, E22, E23, E24, E25, E26, E27, E28, E29, E30, E31, E32, E33, E34, E35, E36, E37, E38, E39, E40, E41, E42, E43, E44, E45, E46, E47, E48, E49, E50, E51, E52];

   if (z >= 1) {
      outlet(0, bubbleSort(tab));
   }
   else {
      outlet(0, tab);
   }
}

//------------------------------------------------------------------//
//                                TRIAGE                            //
//------------------------------------------------------------------//
//Avec l'aide de Paul Goutmann//
function antidiff(z){
   if (z >= 1) {
      outlet(0, bubbleSort(tab));
   }
   else {
      outlet(0, tab);
   }
}

function bubbleSort(tab){
var tab2 = new Array();
var tab2 = tab.slice(0, tab.length), length = tab2.length;	

  for (var i = length-1; i>=0; i--){
    for(var j = 1; j<=i; j++){
      if(tab2[j-1]>tab2[j]){
          var temp = tab2[j-1];;
          tab2[j-1] = tab2[j];
          tab2[j] = temp;

       }
    }
}
 for (i = 0; i<length; i++){
      if(Math.abs(tab2[i]-tab2[i+1])<5){
   tab2.splice((i+1), 1);
       } 
    }
  return tab2;
}