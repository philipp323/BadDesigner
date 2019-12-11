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
            $('#progress-block').css("display","");
            $('#progress-bar').css("display","");
            loadModel("Design_3/Register_WC", false,1,false,null,'SIDE','1. Registerwände versetzen: \n WC, Dusche, Waschtisch');      
            loadModel("Design_3/Register_Dusche", false,2,false,null,'SIDE', null);  
            loadModel("Design_3/Register_Waschtisch", false,3,false,null,'SIDE', null);  
            loadModel("Design_3/Fancoil", false,4,false,null,'SIDE', '2. Fan Coil einbauen');  
            loadModel("Design_3/Duschtasse", false,5,false,null,'TOP', '3. Duschtasse einbauen');  
            loadModel("Design_3/WC_Boden", false,6,false,null,'TOP', '4. WC - Boden einbauen');  
            loadModel("Design_3/WC_Rueckwand", false,7,false,null,'SIDE', '5. Wandelemente mit Eckprofile versetzen');  
            loadModel("Design_3/WC_Seitenwand", true,8,false,null,'SIDE', null);  
            loadModel("Design_3/Trennwand", true,9,false,null,'SIDE', null);  
            loadModel("Design_3/WC_Vorderwand", true,10,false,null,'SIDE', null);  
            loadModel("Design_3/WC_Decke_geschlossen", false,11,false,null,'SIDE', null);  
            loadModel("Design_3/Dusche_Rueckwand", false,12,false,null,'SIDE', null);  
            loadModel("Design_3/Seitenwand", true,13,false,null,'SIDE', null);  
            loadModel("Design_3/Dusche_Decke", false,14,false,null,'SIDE', '6. Decke inkl. Beleuchtung, Absaugung, Revisionsklappe');  
            loadModel("Design_3/Waschtisch_Verkleidung", false,15,false,null,'SIDE', null);  
            loadModel("Design_3/Restliche_Verkleidung", false,16,false,null,'SIDE', null);  
            loadModel("Design_3/Fliesenboden", false,17,false,null,'TOP', null);  
            loadModel("Design_3/Waschtischunterbau", false,18,false,null,'SIDE', '7. Waschtischunterbau');  
            loadModel("Design_3/Spiegel", false,19,false,null,'SIDE', '8. Spiegel inkl. Beleuchtung');  
            loadModel("Design_3/Tuere_WC", true,20,false,null,'SIDE', '9. Türen einsetzen');  
            loadModel("Design_3/Tuere_Dusche", true,21,false,null,'SIDE', null);  
            loadModel("Design_3/Waschbecken", false,22,false,null,'TOP', '10. Waschbecken + Amatur');  
            loadModel("Design_3/WC", false,23,false,null,'SIDE', '11. WC Keramik montieren');  
            loadModel("Design_3/Duscharmatur", false,24,false,null,'SIDE', '12. Duscharmatur einbauen'); 
            loadModel("Design_3/Zubehoer", false,25,false,null,'TOP', '13. Zubehör');   
            loadModel("Design_3/Deckenverkleidung", false,26,false,null,'SIDE', '14. Deckenverkleidung');  
          break;
        case 4:
            console.log("==== GENERATE 4. DESIGN ====");
            break;
        default:
            console.log("==== NO DESIGN CHOSEN? ====");
          break;
      }
}