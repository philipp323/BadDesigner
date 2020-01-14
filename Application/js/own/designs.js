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
            $('#slider').prop('max', numberOfModels + 1);
            $('#progress-block').css("display","");
            $('#progress-bar').css("display","");
            detailViews.push({id: 0,
              camera: { x: 40, y: 20, z: 110},
              target: {x: -50, y: -50, z: 0},
              array: [
                { 
                  id: 1,   
                  tooltipPosition: new THREE.Vector3(21.8, 3.5, 88), 
                  text: 'Wandelemente werden in Nuten<br>eingefasst - somit wasserdicht!',
                  objectsToDisplay: []}
              ]});
            detailViews.push({id: 1, 
              camera: { x: -100, y: 10, z: -50},
              target: {x: -90, y: 0, z: -100},
              array: [
                {  
                  id: 1,   
                  tooltipPosition: new THREE.Vector3(-89.79, 4, -69), 
                  text: 'Eckprofil - somit wasserdicht!',
                  objectsToDisplay: []}
              ]});
              detailViews.push({id: 2,
                camera: { x: -18, y: 200, z: 130}, 
                target: {x: 50, y: 232, z: 20}, 
                array: [
                  {
                    id: 1,   
                    tooltipPosition: new THREE.Vector3(50, 232, 50), 
                    text: 'Strahler',
                    objectsToDisplay: []},
                  { 
                    id: 2,
                    tooltipPosition: new THREE.Vector3(46, 233, 85), 
                    text: 'LED',
                    objectsToDisplay: []}
              ]});
              detailViews.push({id: 3, 
                camera: { x: -195, y: 190, z: 100}, 
                target: {x: -195, y: 190, z: 0}, 
                array: [
                  {    
                    id: 1,          
                    tooltipPosition: new THREE.Vector3(-193.89, 224.96, -94.5),
                    text: 'LED Beleuchtung innen',
                    objectsToDisplay: []}
              ]});
            loadModel("Design_3_glb/Register_WC", false,1,false,{value: false, childrenId: 0},'FRONT',null,'1. Registerwände versetzen: \n WC, Dusche, Waschtisch', false, 5000);      
            loadModel("Design_3_glb/Register_Dusche", false,2,false,{value: false, childrenId: 0},'FRONT', null, null, false, 5000);  
            loadModel("Design_3_glb/Register_Waschtisch", false,3,false,{value: false, childrenId: 0},'FRONT', null, null, false, 5000);  
            loadModel("Design_3_glb/Fancoil", false,4,false,{value: false, childrenId: 0},'FRONT',null, '2. Fan Coil einbauen', false, 5000);  
            loadModel("Design_3_glb/Duschtasse", false,5,false,{value: false, childrenId: 0},'TOP',null, '3. Duschtasse einbauen', false, 4000);  
            loadModel("Design_3_glb/WC_Boden", false,6,false,{value: false, childrenId: 0},'TOP',null, '4. WC – Boden einbauen', false, 4000);  
            loadModel("Design_3_glb/WC_Rueckwand", false,7,false,{value: true, childrenId: 0},'FRONT', '5. WC Modul einbauen', '5.1 Rückwand', true, 4000);  
            loadModel("Design_3_glb/WC_Seitenwand", false,8,false,{value: true, childrenId: 0},'FRONT',null, '5.2 Seitenwand', true, 4000); 
            loadModel("Design_3_glb/Trennwand", true,9,false,{value: true, childrenId: 0},'FRONT',null, '5.3 Trennwand', true, 4000);  
            loadModel("Design_3_glb/WC_Vorderwand", true,10,false,{value: true, childrenId: 0},'FRONT',null, '5.4 Vorderwand', true, 4000);
            loadModel("Design_3_glb/WC_Decke_geschlossen", false,11,false,{value: false, childrenId: 0},'FRONT',null, '5.5 Decke inkl. Beleuchtung, Absaugung, Revisionsklappe', true, 4000, true, 0);  
            loadModel("Design_3_glb/Dusche_Rueckwand", false,12,false,{value: true, childrenId: 3},'FRONT','6. Dusch Modul einbauen', '6.1 Rückwand', true, 4000);  
            loadModel("Design_3_glb/Dusche_Seitenwand", true,13,false,{value: true, childrenId: 0},'RIGHT',null, '6.2 Seitenwand', true, 4000);  
            loadModel("Design_3_glb/Dusche_Decke", false,14,false,{value: false, childrenId: 0},'FRONT',null, '6.4 Decke inkl. Beleuchtung, Absaugung, Revisionsklappe', true, 4000);  
            loadModel("Design_3_glb/Waschtisch_Verkleidung", false,15,false,{value: true, childrenId: 0},'FRONT',null, '7. Registerverkleidung Waschtisch einbauen', false, 4000,true,2, true, [1,4], [6,12]);  
            loadModel("Design_3_glb/restliche Verkleidung_rechts", false,16,false,{value: false, childrenId: 0},'RIGHT',null, '8. restliche Verkleidungen einbauen', false, 4000, true, 1);
            loadModel("Design_3_glb/restliche Verkleidung_Abdeckbrett", false,17,false,{value: false, childrenId: 0},'TOP',null, null, true, 4000);
            loadModel("Design_3_glb/restliche Verkleidung_links", false,18,false,{value: false, childrenId: 0},'RIGHT',null, null, true, 4000);
            loadModel("Design_3_glb/Fliesenboden_weiß", false,19,false,{value: false, childrenId: 0},'TOP',null, '9. Badezimmerboden verlegen', false, 4000);  
            loadModel("Design_3_glb/Spiegel", false,20,false,{value: false, childrenId: 0},'FRONT',null, '10. Spiegel', false, 4000);  
            loadModel("Design_3_glb/Waschtischunterbau", false,21,false,{value: false, childrenId: 0},'FRONT',null, '11. Waschtischunterbau', false, 4000, true, 3, true, [1], [0]);
            loadModel("Design_3_glb/Tuere_WC", true,22,false,{value: true, childrenId: 0},'FRONT', null, '12. Tür Dusche', false, 4000);
            loadModel("Design_3_glb/Tuere_Dusche", true,23,false,{value: true, childrenId: 0},'RIGHT',null, '13. Tür WC', false, 4000);  
            loadModel("Design_3_glb/Waschbecken", false,24,false,{value: false, childrenId: 0},'TOP',null, '14. Waschbecken + Armatur', false, 4000); 
            loadModel("Design_3_glb/WC", false,25,false,{value: false, childrenId: 0},'FRONT',null, '15. WC Keramik montieren', false, 4000);  
            loadModel("Design_3_glb/Duscharmatur", false,26,false,{value: false, childrenId: 0},'FRONT',null, '16. Duscharmatur einbauen', false, 4000); 
            loadModel("Design_3_glb/Zubehoer", false,27,false,{value: false, childrenId: 0},'TOP',null, '17. Zubehör montieren', false, 4000);   
            loadModel("Design_3_glb/Deckenverkleidung", false,28,false,{value: false, childrenId: 0},'FRONT',null, '18. Deckenverkleidung', false, 4000);

            //textures
            textureNames.push('SanMod_Nature', 'SanMod_Nomad');
          break;
        case 4:
            console.log("==== GENERATE 4. DESIGN ====");
            break;
        default:
            console.log("==== NO DESIGN CHOSEN? ====");
          break;
      }
}