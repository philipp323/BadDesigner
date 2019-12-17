function chooseDesign(id) {
    chosenDesign = id;
}

function generateDesign() {
    if(chosenDesign != 0){
        $('#chooseDesignModal').modal('hide');
    }

    switch (chosenDesign) {
        case 1:
          break;
        case 2:
            console.log("==== GENERATE 2. DESIGN ====");
            createTexturedDoor("dusche_verlauf_weiß");
          break;
        case 3:
            numberOfModels = 26;
            $('#slider').prop('max','26');
            $('#progress-block').css("display","");
            $('#progress-bar').css("display","");
            loadModel("Design_3/Register_WC", false,1,false,null,'FRONT',null,'1. Registerwände versetzen: \n WC, Dusche, Waschtisch', false, 5000);      
            loadModel("Design_3/Register_Dusche", false,2,false,null,'FRONT', null, null, false, 5000);  
            loadModel("Design_3/Register_Waschtisch", false,3,false,null,'FRONT', null, null, false, 5000);  
            loadModel("Design_3/Fancoil", false,4,false,null,'FRONT',null, '2. Fan Coil einbauen', false, 5000);  
            loadModel("Design_3/Duschtasse", false,5,false,null,'TOP',null, '3. Duschtasse einbauen', false, 4000);  
            loadModel("Design_3/WC_Boden", false,6,false,null,'TOP',null, '4. WC – Boden einbauen', false, 4000);  
            loadModel("Design_3/WC_Rueckwand", false,7,false,null,'FRONT', '5. WC Modul einbauen', '5.1 Rückwand', true, 4000);  
            loadModel("Design_3/WC_Seitenwand", true,8,false,null,'FRONT',null, '5.2 Seitenwand', true, 4000);  
            loadModel("Design_3/Trennwand", true,9,false,null,'FRONT',null, '5.3 Trennwand', true, 4000);  
               //Vorderwand WC -> Vorderwand Dusche
            loadModel("Design_3/WC_Decke_geschlossen", false,10,false,null,'FRONT',null, '5.5 WC Decke inkl. Beleuchtung, Absaugung, Revisionsklappe', true, 4000);  
            loadModel("Design_3/Dusche_Rueckwand", false,11,false,null,'FRONT','6. Dusch Modul einbauen', '6.1 Rückwand', true, 4000);  
            loadModel("Design_3/Seitenwand", true,12,false,null,'RIGHT',null, '6.2 Seitenwand', true, 4000);  
            loadModel("Design_3/WC_Vorderwand", true,13,false,null,'FRONT',null, '6.3 Vorderwand', true, 4000);
            loadModel("Design_3/Dusche_Decke", false,14,false,null,'FRONT',null, '6.4 Dusche Decke inkl. Beleuchtung, Absaugung, Revisionsklappe', true, 4000);  
            loadModel("Design_3/Waschtisch_Verkleidung", false,15,false,null,'FRONT',null, '7.1 Registerverkleidung Waschtisch einbauen', true, 4000);  
            loadModel("Design_3/Restliche_Verkleidung", false,16,false,null,'FRONT',null, '7.2 restliche Verkleidungen einbauen', true, 4000);  
            loadModel("Design_3/Fliesenboden", false,17,false,null,'TOP',null, '8. Badezimmerboden verlegen', false, 4000);  
            loadModel("Design_3/Waschtischunterbau", false,18,false,null,'FRONT',null, '9. Waschtischunterbau', false, 4000);  
            loadModel("Design_3/Spiegel", false,19,false,null,'FRONT',null, '10. Spiegel + Abdeckbrett', false, 4000);  
            loadModel("Design_3/Tuere_WC", true,20,false,null,'FRONT','11. Türen mit Beschläge einsetzen','11.1 Tür WC', true, 4000);  
            loadModel("Design_3/Tuere_Dusche", true,21,false,null,'RIGHT',null, '11.2 Tür Dusche', true, 4000);  
            loadModel("Design_3/Waschbecken", false,22,false,null,'TOP',null, '12. Waschbecken + Armatur', false, 4000);  
            loadModel("Design_3/WC", false,23,false,null,'FRONT',null, '13. WC Keramik montieren', false, 4000);  
            loadModel("Design_3/Duscharmatur", false,24,false,null,'FRONT',null, '14. Duscharmatur einbauen', false, 4000); 
            loadModel("Design_3/Zubehoer", false,25,false,null,'TOP',null, '15. Zubehör montieren', false, 4000);   
            loadModel("Design_3/Deckenverkleidung", false,26,false,null,'FRONT',null, '16. Deckenverkleidung', false, 4000);  
          break;
        case 4:
            console.log("==== GENERATE 4. DESIGN ====");
            break;
        default:
            console.log("==== NO DESIGN CHOSEN? ====");
          break;
      }
}