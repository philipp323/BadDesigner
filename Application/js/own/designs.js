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
            numberOfModels = 28;
            $('#slider').prop('max','28');
            $('#progress-block').css("display","");
            $('#progress-bar').css("display","");
            loadModel("Design_3/Register_WC", false,1,false,null,'FRONT',null,'1. Registerwände versetzen: \n WC, Dusche, Waschtisch', false, 5000);      
            loadModel("Design_3/Register_Dusche", false,2,false,null,'FRONT', null, null, false, 5000);  
            loadModel("Design_3/Register_Waschtisch", false,3,false,null,'FRONT', null, null, false, 5000);  
            loadModel("Design_3/Fancoil", false,4,false,null,'FRONT',null, '2. Fan Coil einbauen', false, 5000);  
            loadModel("Design_3/Duschtasse", false,5,false,null,'TOP',null, '3. Duschtasse einbauen', false, 4000);  
            loadModel("Design_3/WC_Boden", false,6,false,null,'TOP',null, '4. WC – Boden einbauen', false, 4000);  
            loadModel("Design_3/WC_Rueckwand", false,7,false,null,'FRONT', '5. WC Modul einbauen', '5.1 Rückwand', true, 4000);  
            loadModel("Design_3/WC_Seitenwand", false,8,false,null,'FRONT',null, '5.2 Seitenwand', true, 4000);  
            loadModel("Design_3/Trennwand", true,9,false,null,'FRONT',null, '5.3 Trennwand', true, 4000);  
            loadModel("Design_3/WC_Vorderwand", true,10,false,null,'FRONT',null, '5.4 Vorderwand', true, 4000);
            loadModel("Design_3/WC_Decke_geschlossen", false,11,false,null,'FRONT',null, '5.5 Decke inkl. Beleuchtung, Absaugung, Revisionsklappe', true, 4000);  
            loadModel("Design_3/Dusche_Rueckwand", false,12,false,null,'FRONT','6. Dusch Modul einbauen', '6.1 Rückwand', true, 4000);  
            loadModel("Design_3/Seitenwand", true,13,false,null,'RIGHT',null, '6.2 Seitenwand', true, 4000);  
            loadModel("Design_3/Dusche_Decke", false,14,false,null,'FRONT',null, '6.4 Decke inkl. Beleuchtung, Absaugung, Revisionsklappe', true, 4000);  
            loadModel("Design_3/Waschtisch_Verkleidung", false,15,false,null,'FRONT',null, '7. Registerverkleidung Waschtisch einbauen', false, 4000);  
            loadModel("Design_3/restliche Verkleidung_rechts", false,16,false,null,'RIGHT',null, '8. restliche Verkleidungen einbauen', false, 4000);
            loadModel("Design_3/restliche Verkleidung_Abdeckbrett", false,17,false,null,'TOP',null, null, true, 4000);
            loadModel("Design_3/restliche Verkleidung_links", false,18,false,null,'RIGHT',null, null, true, 4000);
            loadModel("Design_3/Fliesenboden_weiß", false,19,false,null,'TOP',null, '9. Badezimmerboden verlegen', false, 4000);  
            loadModel("Design_3/Waschtischunterbau", false,20,false,null,'FRONT',null, '10. Waschtischunterbau', false, 4000);  
            loadModel("Design_3/Spiegel", false,21,false,null,'FRONT',null, '11. Spiegel', false, 4000);  
            loadModel("Design_3/Tuere_WC", true,22,false,null,'FRONT','12. Türen mit Beschläge einsetzen','12.1 Tür WC', true, 4000);  
            loadModel("Design_3/Tuere_Dusche", true,23,false,null,'RIGHT',null, '12.2 Tür Dusche', true, 4000);  
            loadModel("Design_3/Waschbecken", false,24,false,null,'TOP',null, '13. Waschbecken + Armatur', false, 4000);  
            loadModel("Design_3/WC", false,25,false,null,'FRONT',null, '14. WC Keramik montieren', false, 4000);  
            loadModel("Design_3/Duscharmatur", false,26,false,null,'FRONT',null, '15. Duscharmatur einbauen', false, 4000); 
            loadModel("Design_3/Zubehoer", false,27,false,null,'TOP',null, '16. Zubehör montieren', false, 4000);   
            loadModel("Design_3/Deckenverkleidung", false,28,false,null,'FRONT',null, '17. Deckenverkleidung', false, 4000);  
          break;
        case 4:
            console.log("==== GENERATE 4. DESIGN ====");
            break;
        default:
            console.log("==== NO DESIGN CHOSEN? ====");
          break;
      }
}