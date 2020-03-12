function chooseDesign(id) {
    if(chosenDesign != id){
      loadModel("Design_" + id + "_obj/Betonboden",false, 0, 0, false, 0, true);
    }
    chosenDesign = id;
}

function generateDesign() {
    if(chosenDesign != 0){
        $('#chooseDesignModal').modal('hide');
    }

    switch (chosenDesign) {
        case 1:
          console.log("==== GENERATE 1. DESIGN ====");
          numberOfModels = 33;
          $('#slider').prop('max', numberOfModels + 1);

          //TEXTURES
          textures.push(
            {id: 1, name: 'V1_SanMod_Nature', displayName: 'NATURE', generatedTextureObjects: undefined, objectsToHide: undefined},
            {id: 2, name: 'V1_SanMod_Nomad', displayName: 'NOMAD', generatedTextureObjects: undefined, objectsToHide: undefined},
            {id: 3, name: 'V1_SanMod_Stone', displayName: 'STONE', generatedTextureObjects: undefined, objectsToHide: undefined},
            {id: 4, name: 'V1_SanMod_Stripes', displayName: 'STRIPES', generatedTextureObjects: undefined, objectsToHide: undefined},
            {id: 5, name: 'V1_SanMod_Woods', displayName: 'INTO THE WOODS', generatedTextureObjects: undefined, objectsToHide: undefined});

          //DETAIL - VIEWS
          detailViews.push({id: 0,
            camera: { x: -3, y: 10, z: 24},
            target: {x: 8, y: 2, z: 0},
            objectsToHide: [],
            array: [
              { 
                id: 1,   
                tooltipPosition: new THREE.Vector3(5.6, 3, 13.5), 
                text: 'Wandelemente werden in Nuten<br>eingefasst - somit wasserdicht!',
                objectsToDisplay: [],
                loadedObjectToDisplay: undefined,
                second: false,
                third: false,
                arrowData: [],
                arrows: undefined}
            ]});
          detailViews.push({id: 1, 
            camera: { x: -208, y: 10, z: -60},
            target: {x: -220, y: 2, z: -71},
            objectsToHide: [],
            array: [
              {  
                id: 1,   
                tooltipPosition: new THREE.Vector3(-213.5, 3.5, -70.08), 
                text: 'Eckprofil - somit wasserdicht!',
                objectsToDisplay: [],
                loadedObjectToDisplay: undefined,
                second: false,
                third: false,
                arrowData: [],
                arrows: undefined}
            ]});
            detailViews.push({id: 2,
              camera: { x: -18, y: 200, z: 130}, 
              target: {x: 50, y: 232, z: 20}, 
              objectsToHide: [10],
              array: [
                {
                  id: 1,   
                  tooltipPosition: new THREE.Vector3(56, 232.5, 52.3), 
                  text: 'Strahler',
                  objectsToDisplay: [],
                  loadedObjectToDisplay: undefined,
                  second: false,
                  third: false,
                  arrowData: [],
                  arrows: []},
                { 
                  id: 2,
                  tooltipPosition: new THREE.Vector3(43.5, 232.9, 86), 
                  text: 'indirekte LED - Beleuchtung',
                  objectsToDisplay: [],
                  loadedObjectToDisplay: undefined,
                  second: false,
                  third: false,
                  arrowData: [],
                  arrows: undefined},
                { 
                  id: 3,
                  tooltipPosition: new THREE.Vector3(40.69, 233.9, 88), 
                  text: 'Absaugung über Decke',
                  objectsToDisplay: [],
                  loadedObjectToDisplay: undefined,
                  second: true,
                  third: false,
                  arrowData: [
                    {positionx: 30, positiony: 225, positionz: 90, rotationx: 180, rotationy: -110, rotationz: -30},
                    {positionx: 90, positiony: 230, positionz: 45, rotationx: 180, rotationy: -100, rotationz: -30}
                  ],
                  arrows: []},
                { 
                  id: 4,
                  tooltipPosition: new THREE.Vector3(64, 238, 72), 
                  text: 'Revisionsklappe',
                  objectsToDisplay: [],
                  loadedObjectToDisplay: undefined,
                  second: false,
                  third: true,
                  arrowData: [
                    {positionx: 30, positiony: 227, positionz: 90, rotationx: 180, rotationy: 90, rotationz: -180}
                  ],
                  arrows: []}
            ]});
            detailViews.push({id: 3, 
              camera: { x: -85, y: 190, z: 100}, 
              target: {x: -85, y: 190, z: 0}, 
              objectsToHide: [],
              array: [
                {    
                  id: 1,          
                  tooltipPosition: new THREE.Vector3(-98, 200, -94.5),
                  text: 'LED Beleuchtung innen',
                  objectsToDisplay: [],
                  loadedObjectToDisplay: undefined,
                  second: false,
                  third: false,
                  arrowData: [],
                  arrows: undefined}
            ]});
          //Summe der Zeiten: 750
          loadModel("Design_1_glb/Register_WC", false, 0, 0, false,1,false,{value: false, childrenId: 0, hideAll: false},'FRONT',null,'1. Registerwände versetzen: WC, Dusche, Waschtisch', false, 5000, 20);  
          loadModel("Design_1_glb/Register_Waschtisch", false, 0, 0, false,2,false,{value: false, childrenId: 0, hideAll: false},'FRONT', null, null, false, 5000, 20);      
          loadModel("Design_1_glb/Register_Dusche", false, 0, 0, false,3,false,{value: false, childrenId: 0, hideAll: false},'FRONT', null, null, false, 5000, 20);  
          loadModel("Design_1_glb/Fancoil", false, 0, 0, false,4,false,{value: false, childrenId: 0, hideAll: false},'FRONT',null, '2. Fan Coil einbauen', false, 5000, 60);  
          loadModel("Design_1_glb/Duschtasse", false, 0, 0, false,5,false,{value: false, childrenId: 0, hideAll: false},'TOP',null, '3. Duschtasse einbauen', false, 4000, 60);  
          loadModel("Design_1_glb/WC_Boden", false, 0, 0, false,6,false,{value: false, childrenId: 0, hideAll: false},'TOP',null, '4. WC – Boden einbauen', false, 4000, 60);  
          loadModel("Design_1_glb/WC_Rueckwand", false, 0, 0, false,7,false,{value: true, childrenId: 0, hideAll: false},'FRONT', '5. WC Modul einbauen', '5.1 Rückwand', true, 4000, 18);  
          loadModel("Design_1_glb/WC_Seitenwand", false, 0, 0, false,8,false,{value: true, childrenId: 0, hideAll: true},'FRONT',null, '5.2 Seitenwand', true, 4000, 18);
          loadModel("Design_1_glb/WC_Trennwand", false, 0, 0, true,9,false,{value: true, childrenId: 0, hideAll: false},'FRONT',null, '5.3 Trennwand', true, 4000, 18); 
          loadModel("Design_1_glb/WC_Vorderwand", false, 0, 0, true,10,false,{value: true, childrenId: 0, hideAll: false},'FRONT',null, '5.4 Vorderwand', true, 4000, 18, true, 0);
          loadModel("Design_1_glb/WC_Decke_geschlossen", false, 0, 0, false,11,false,{value: false, childrenId: 0, hideAll: false},'FRONT',null, '5.5 Decke inkl. Beleuchtung, Absaugung, Revisionsklappe', true, 4000, 18, false, 2,false, true, [7], 2);  
          loadModel("Design_1_glb/Dusche_Rueckwand", false, 0, 0, false,12,false,{value: true, childrenId: 7, hideAll: true},'FRONT','6. Dusch Modul einbauen', '6.1 Rückwand', true, 4000, 40, true, 2, true, false, undefined, undefined, true);  
          loadModel("Design_1_glb/Dusche_Seitenwand", false, 0, 0, true,13,false,{value: true, childrenId: 0, hideAll: false},'RIGHT',null, '6.2 Seitenwand', true, 4000, 20);  
          loadModel("Design_1_glb/Dusche_Vorderwand", false, 0, 0, true,14,false,{value: true, childrenId: 0, hideAll: false},'FRONT',null, '6.3 Vorderwand', true, 4000, 10, true, 1);
          loadModel("Design_1_glb/Dusche_Trennwand", false, 0, 0, true,15,false,{value: true, childrenId: 0, hideAll: false},'LEFT',null, '6.4 Trennwand', true, 4000, 10);
          loadModel("Design_1_glb/Dusche_Decke", false, 0, 0, false,16,false,{value: false, childrenId: 0, hideAll: false},'FRONT',null, '6.5 Decke inkl. Beleuchtung, Absaugung, Revisionsklappe', true, 4000, 30);
          loadModel("Design_1_glb/restliche_Verkleidung_Dusche", false, 0, 0, false,17,false,{value: true, childrenId: 0, hideAll: true, except: ['V1_SanMod_Nature', 'V1_SanMod_Stone','V1_SanMod_Stripes', 'V1_SanMod_Woods']},'RIGHT',null, '6.6 restliche Verkleidung einbauen', true, 3000, 10);
          loadModel("Design_1_glb/Waschtisch_Boden", false, 0, 0, false,18,false,{value: false, childrenId: 0, hideAll: false},'TOP',null, '7. Badezimmerboden verlegen', true, 4000, 30);
          loadModel("Design_1_glb/Waschtisch_Verkleidung", false, 0, 0, false,19,false,{value: true, childrenId: 0, hideAll: true},'FRONT',null, '8. Registerverkleidung Waschtisch einbauen', false, 4000, 30);  
          loadModel("Design_1_glb/restliche_Verkleidung_Abdeckbrett", false, 0, 0, false,20,false,{value: false, childrenId: 0, hideAll: false},'TOP',null, '9. restliche Verkleidungen einbauen', true, 4000, 10);
          loadModel("Design_1_glb/restliche_Verkleidung_rechts", false, 0, 0, false,21,false,{value: true, childrenId: 0, hideAll: true, except: ['V1_SanMod_Nature', 'V1_SanMod_Stone', 'V1_SanMod_Woods']},'RIGHT',null, null, false, 4000, 10);
          loadModel("Design_1_glb/restliche_Verkleidung_links", false, 0, 0, false,22,false,{value: true, childrenId: 0, hideAll: true, except: ['V1_SanMod_Nature', 'V1_SanMod_Stone', 'V1_SanMod_Woods']},'LINKS',null, null, true, 4000, 10);
          loadModel("Design_1_glb/Spiegel", false, 0, 0, false,23,false,{value: false, childrenId: 0, hideAll: false},'FRONT',null, '10. Spiegel', true, 4000, 15, false, 3,false, true, [0], 3);
          loadModel("Design_1_glb/Waschtischunterbau", false, 0, 0, false,24,false,{value: false, childrenId: 0, hideAll: false},'FRONT',null, '11. Waschtischunterbau', true, 4000, 15, true, 3, true);
          loadModel("Design_1_glb/Tuere_WC", false, 0, 0, true,25,false,{value: true, childrenId: 0, hideAll: false},'RIGHT',null, '12. Tür Dusche', true, 4000, 30);
          loadModel("Design_1_glb/Tuere_Dusche", false, 0, 0, true,26,false,{value: true, childrenId: 0, hideAll: false},'LEFT',null, '13. Tür WC', true, 4000, 30);
          loadModel("Design_1_glb/Waschbecken", false, 0, 0, false,27,false,{value: false, childrenId: 0, hideAll: false},'TOP',null, '14. Waschbecken + Armatur', true, 4000, 30);
          loadModel("Design_1_glb/WC", false, 0, 0, false,28,false,{value: false, childrenId: 0, hideAll: false},'FRONT',null, '15. WC Keramik montieren', true, 4000, 30);
          loadModel("Design_1_glb/Duscharmatur", false, 0, 0, false,29,false,{value: false, childrenId: 0, hideAll: false},'FRONT',null, '16. Duscharmatur einbauen', true, 4000, 15);
          loadModel("Design_1_glb/Zubehoer", false, 0, 0, false,30,false,{value: false, childrenId: 0, hideAll: false},'TOP',null, '17. Zubehör montieren', true, 4000, 15);
          loadModel("Design_1_glb/Deckenverkleidung_2", false, 0, 0, false,31,false,{value: false, childrenId: 0, hideAll: false},'TOP',null, '18. Deckenverkleidung', true, 4000, 6);
          loadModel("Design_1_glb/Deckenverkleidung_1", false, 0, 0, false,32,false,{value: false, childrenId: 0, hideAll: false},'FRONT',null, null, true, 4000, 6);
          loadModel("Design_1_glb/Deckenverkleidung_3", false, 0, 0, false,33,false,{value: false, childrenId: 0, hideAll: false},'RIGHT',null, null, true, 4000, 6);

          //otherModels
          loadModel("Design_1_glb/WC_Decke_offen", true, 2, 11);

          break;
        case 2:
            console.log("==== GENERATE 2. DESIGN ====");

            numberOfModels = 30;
            $('#slider').prop('max', numberOfModels + 1);
  
            //TEXTURES
            textures.push(
              {id: 1, name: 'V2_SanMod_Nature', displayName: 'NATURE', generatedTextureObjects: undefined, objectsToHide: undefined},
              {id: 2, name: 'V2_SanMod_Nomad', displayName: 'NOMAD', generatedTextureObjects: undefined, objectsToHide: undefined},
              {id: 3, name: 'V2_SanMod_Stripes', displayName: 'STRIPES', generatedTextureObjects: undefined, objectsToHide: undefined},
              {id: 4, name: 'V2_SanMod_Woods', displayName: 'INTO THE WOODS', generatedTextureObjects: undefined, objectsToHide: undefined});
  
        //DETAIL - VIEWS
        detailViews.push({id: 0,
          camera: { x: -87, y: 7, z: 25},
          target: {x: -90, y: 5, z: 20},
          objectsToHide: [],
          array: [
            { 
              id: 1,   
              tooltipPosition: new THREE.Vector3(-88, 3.19, 12.7), 
              text: 'Wandelemente werden in Nuten<br>eingefasst - somit wasserdicht!',
              objectsToDisplay: [],
              loadedObjectToDisplay: undefined,
              second: false,
              third: false,
              arrowData: [],
              arrows: undefined}
          ]});
        detailViews.push({id: 1, 
          camera: { x: 58, y: 7, z: 100},
          target: {x: 68, y: 7, z: 87},
          objectsToHide: [],
          array: [
            {  
              id: 1,   
              tooltipPosition: new THREE.Vector3(72.29, 3.4, 90.4), 
              text: 'Eckprofil - somit wasserdicht!',
              objectsToDisplay: [],
              loadedObjectToDisplay: undefined,
              second: false,
              third: false,
              arrowData: [],
              arrows: undefined}
          ]});
          detailViews.push({id: 2,
            camera: { x: -160, y: 200, z: -25}, 
            target: {x: -29, y: 232, z: -80}, 
            objectsToHide: [],
            array: [
              {
                id: 1,   
                tooltipPosition: new THREE.Vector3(-49, 233, -45), 
                text: 'Strahler',
                objectsToDisplay: [],
                loadedObjectToDisplay: undefined,
                second: false,
                third: false,
                arrowData: [],
                arrows: []},
              { 
                id: 2,
                tooltipPosition: new THREE.Vector3(-85, 234, -50), 
                text: 'indirekte LED - Beleuchtung',
                objectsToDisplay: [],
                loadedObjectToDisplay: undefined,
                second: false,
                third: false,
                arrowData: [],
                arrows: undefined},
              { 
                id: 3,
                tooltipPosition: new THREE.Vector3(-85, 234, -50), 
                text: 'Absaugung über Decke',
                objectsToDisplay: [],
                loadedObjectToDisplay: undefined,
                second: true,
                third: false,
                arrowData: [
                  {positionx: -85, positiony: 230, positionz: -55, rotationx: 180, rotationy: 80, rotationz: -30},
                  {positionx: -40, positiony: 230, positionz: -90, rotationx: 180, rotationy: 30, rotationz: -30}
                ],
                arrows: []},
              { 
                id: 4,
                tooltipPosition: new THREE.Vector3(-61, 238, -48.39), 
                text: 'Revisionsklappe',
                objectsToDisplay: [],
                loadedObjectToDisplay: undefined,
                second: false,
                third: true,
                arrowData: [
                  {positionx: -90, positiony: 227, positionz: -50, rotationx: 180, rotationy: 190, rotationz: -180}
                ],
                arrows: []}
          ]});
          detailViews.push({id: 3, 
            camera: { x: -120, y: 174, z: -5}, 
            target: {x: -244, y: 175, z: -5}, 
            objectsToHide: [],
            array: [
              {    
                id: 1,          
                tooltipPosition: new THREE.Vector3(-244.6, 208, -11.7),
                text: 'LED Beleuchtung innen',
                objectsToDisplay: [],
                loadedObjectToDisplay: undefined,
                second: false,
                third: false,
                arrowData: [],
                arrows: undefined}
          ]});


          loadModel("Design_2_glb/Register_WC", false, 0, 0, false,1,false,{value: false, childrenId: 0, hideAll: false, except: null},'RIGHT',null,'1. Registerwände versetzen: WC, Dusche, Waschtisch', false, 5000, 20);  
          loadModel("Design_2_glb/Register_Dusche", false, 0, 0, false,2,false,{value: false, childrenId: 0, hideAll: false, except: null},'RIGHT', null, null, false, 5000, 20);      
          loadModel("Design_2_glb/Register_Waschtisch", false, 0, 0, false,3,false,{value: false, childrenId: 0, hideAll: false, except: null},'LEFT', null, null, false, 5000, 20);  
          loadModel("Design_2_glb/Fancoil", false, 0, 0, false,4,false,{value: false, childrenId: 0, hideAll: false, except: null},'RIGHT',null, '2. Fan Coil einbauen', false, 5000, 60);  
          loadModel("Design_2_glb/Duschtasse", false, 0, 0, false,5,false,{value: false, childrenId: 0, hideAll: false, except: null},'TOP',null, '3. Duschtasse einbauen', false, 4000, 60);  
          loadModel("Design_2_glb/WC_Boden", false, 0, 0, false,6,false,{value: false, childrenId: 0, hideAll: false, except: null},'TOP',null, '4. WC – Boden einbauen', false, 4000, 60);  
          loadModel("Design_2_glb/WC_Rueckwand", false, 0, 0, false,7,false,{value: true, childrenId: 1, hideAll: false, except: null},'RIGHT', '5. WC Modul einbauen', '5.1 Rückwand', true, 4000, 18);  
          loadModel("Design_2_glb/WC_Seitenwand", false, 0, 0, false,8,false,{value: true, childrenId: 0, hideAll: false, except: null},'RIGHT',null, '5.2 Seitenwand', true, 4000, 18);
          loadModel("Design_2_glb/WC_Trennwand", false, 0, 0, true,9,false,{value: true, childrenId: 0, hideAll: false, except: null},'RIGHT',null, '5.3 Trennwand', true, 4000, 18); 
          loadModel("Design_2_glb/WC_Vorderwand", false, 0, 0, true,10,false,{value: true, childrenId: 0, hideAll: false, except: null},'RIGHT',null, '5.4 Vorderwand', true, 4000, 18);
          loadModel("Design_2_glb/WC_Decke_geschlossen", false, 0, 0, false,11,false,{value: false, childrenId: 0, hideAll: false, except: null},'RIGHT',null, '5.5 Decke inkl. Beleuchtung, Absaugung, Revisionsklappe', true, 4000, 18,true, 0,false, true, [5,7], 2);  
          loadModel("Design_2_glb/Dusche_Rueckwand", false, 0, 0, false,12,false,{value: true, childrenId: 1, hideAll: false, except: null},'RIGHT','6. Dusch Modul einbauen', '6.1 Rückwand', true, 4000, 40);  
          loadModel("Design_2_glb/Dusche_Seitenwand", false, 0, 0, true,13,false,{value: true, childrenId: 0, hideAll: false, except: null},'RIGHT',null, '6.2 Seitenwand', true, 4000, 20);  
          loadModel("Design_2_glb/restliche_Verkleidung_Dusche", false, 0, 0, true,14,false,{value: true, childrenId: 0, hideAll: false, except: ['V2_SanMod_Nature','V2_SanMod_Stripes','V2_SanMod_Woods']},'FRONT',null, '6.3 Verkleidung Dusche', true, 4000, 10);
          loadModel("Design_2_glb/Dusche_Decke", false, 0, 0, false,15,false,{value: false, childrenId: 0, hideAll: false, except: null},'RIGHT',null, '6.4 Decke inkl. Beleuchtung, Absaugung, Revisionsklappe', true, 4000, 30, true, 1,false, true, [5,7], 2);
          loadModel("Design_2_glb/Waschtisch_Boden", false, 0, 0, false,16,false,{value: false, childrenId: 0, hideAll: false, except: null},'TOP',null, '7. Badezimmerboden verlegen', true, 4000, 30, true, 2, true, false, undefined, undefined, true);
          loadModel("Design_2_glb/Waschtisch_Verkleidung", false, 0, 0, false,17,false,{value: true, childrenId: 0, hideAll: true, except: null},'LEFT',null, '8. Registerverkleidung Waschtisch einbauen', false, 4000, 30);  
          loadModel("Design_2_glb/Waschtisch_Verkleidung_hinten", false, 0, 0, false,18,false,{value: true, childrenId: 0, hideAll: true, except: null},'RIGHT',null, null, false, 4000, 30);  
          loadModel("Design_2_glb/restliche_Verkleidung_rechts", false, 0, 0, false,19,false,{value: true, childrenId: 0, hideAll: true, except: null},'FRONT',null, '9. restliche Verkleidungen einbauen', false, 4000, 10);
          loadModel("Design_2_glb/restliche_Verkleidung_Abdeckbrett", false, 0, 0, false,20,false,{value: false, childrenId: 0, hideAll: false, except: null},'TOP',null, null, true, 4000, 10);
          loadModel("Design_2_glb/Spiegel", false, 0, 0, false,21,false,{value: false, childrenId: 0, hideAll: false, except: null},'LEFT',null, '10. Spiegel', true, 4000, 15, false, 3,false, true, [1], 3);
          loadModel("Design_2_glb/Waschtischunterbau", false, 0, 0, false,22,false,{value: false, childrenId: 0, hideAll: false, except: null},'LEFT',null, '11. Waschtischunterbau', true, 4000, 15, true, 3, true);
          loadModel("Design_2_glb/Tuere_WC", false, 0, 0, true,23,false,{value: true, childrenId: 0, hideAll: false, except: null},'RIGHT',null, '12. Tür Dusche', true, 4000, 30);
          loadModel("Design_2_glb/Tuere_Dusche", false, 0, 0, true,24,false,{value: true, childrenId: 0, hideAll: false, except: null},'RIGHT',null, '13. Tür WC', true, 4000, 30);
          loadModel("Design_2_glb/Waschbecken", false, 0, 0, false,25,false,{value: false, childrenId: 0, hideAll: false, except: null},'TOP',null, '14. Waschbecken + Armatur', true, 4000, 30);
          loadModel("Design_2_glb/WC", false, 0, 0, false,26,false,{value: false, childrenId: 0, hideAll: false, except: null},'RIGHT',null, '15. WC Keramik montieren', true, 4000, 30);
          loadModel("Design_2_glb/Duscharmatur", false, 0, 0, false,27,false,{value: false, childrenId: 0, hideAll: false, except: null},'RIGHT',null, '16. Duscharmatur einbauen', true, 4000, 15);
          loadModel("Design_2_glb/Zubehoer", false, 0, 0, false,28,false,{value: false, childrenId: 0, hideAll: false, except: null},'TOP',null, '17. Zubehör montieren', true, 4000, 15);
          loadModel("Design_2_glb/Deckenverkleidung_1", false, 0, 0, false,29,false,{value: false, childrenId: 0, hideAll: false, except: null},'RIGHT',null, '18. Deckenverkleidung', true, 4000, 6);
          loadModel("Design_2_glb/Deckenverkleidung_2", false, 0, 0, false,30,false,{value: false, childrenId: 0, hideAll: false, except: null},'FRONT',null, null, true, 4000, 6);

          //otherModels
          loadModel("Design_2_glb/WC_Decke_offen", true, 2, 11);

          break;
        case 3:
          console.log("==== GENERATE 3. DESIGN ====");

          numberOfModels = 29;
            $('#slider').prop('max', numberOfModels + 1);
            // $('#progress-block').css("display","");
            // $('#progress-bar').css("display","");

            //TEXTURES
            textures.push(
              {id: 1, name: 'V3_SanMod_Nature', displayName: 'NATURE', generatedTextureObjects: undefined, objectsToHide: undefined},
              {id: 2, name: 'V3_SanMod_Nomad', displayName: 'NOMAD', generatedTextureObjects: undefined, objectsToHide: undefined},
              {id: 3, name: 'V3_SanMod_Stripes', displayName: 'STRIPES', generatedTextureObjects: undefined, objectsToHide: undefined},
              {id: 4, name: 'V3_SanMod_Woods', displayName: 'INTO THE WOODS', generatedTextureObjects: undefined, objectsToHide: undefined});

            //DETAIL - VIEWS
            detailViews.push({id: 0,
              camera: { x: 40, y: 20, z: 110},
              target: {x: -50, y: -50, z: 0},
              objectsToHide: [],
              array: [
                { 
                  id: 1,   
                  tooltipPosition: new THREE.Vector3(21.8, 3.5, 88), 
                  text: 'Wandelemente werden in Nuten<br>eingefasst - somit wasserdicht!',
                  objectsToDisplay: [],
                  loadedObjectToDisplay: undefined,
                  second: false,
                  third: false,
                  arrowData: [],
                  arrows: undefined}
              ]});
            detailViews.push({id: 1, 
              camera: { x: -100, y: 10, z: -50},
              target: {x: -90, y: 0, z: -100},
              objectsToHide: [],
              array: [
                {  
                  id: 1,   
                  tooltipPosition: new THREE.Vector3(-89.79, 4, -69), 
                  text: 'Eckprofil - somit wasserdicht!',
                  objectsToDisplay: [],
                  loadedObjectToDisplay: undefined,
                  second: false,
                  third: false,
                  arrowData: [],
                  arrows: undefined}
              ]});
              detailViews.push({id: 2,
                camera: { x: -18, y: 200, z: 130}, 
                target: {x: 50, y: 232, z: 20}, 
                objectsToHide: [],
                array: [
                  {
                    id: 1,   
                    tooltipPosition: new THREE.Vector3(20, 216.9, 89.9), 
                    text: 'Strahler',
                    objectsToDisplay: [],
                    loadedObjectToDisplay: undefined,
                    second: false,
                    third: false,
                    arrowData: [],
                    arrows: []},
                  { 
                    id: 2,
                    tooltipPosition: new THREE.Vector3(45.8, 234, 85), 
                    text: 'indirekte LED - Beleuchtung',
                    objectsToDisplay: [],
                    loadedObjectToDisplay: undefined,
                    second: false,
                    third: false,
                    arrowData: [],
                    arrows: undefined},
                  { 
                    id: 3,
                    tooltipPosition: new THREE.Vector3(40.69, 233.9, 88), 
                    text: 'Absaugung über Decke',
                    objectsToDisplay: [],
                    loadedObjectToDisplay: undefined,
                    second: true,
                    third: false,
                    arrowData: [
                      {positionx: 30, positiony: 225, positionz: 90, rotationx: 180, rotationy: -110, rotationz: -30},
                      {positionx: 90, positiony: 230, positionz: 45, rotationx: 180, rotationy: -100, rotationz: -30}
                    ],
                    arrows: []},
                  { 
                    id: 4,
                    tooltipPosition: new THREE.Vector3(63, 238, 72), 
                    text: 'Revisionsklappe',
                    objectsToDisplay: [],
                    loadedObjectToDisplay: undefined,
                    second: false,
                    third: true,
                    arrowData: [
                      {positionx: 30, positiony: 227, positionz: 90, rotationx: 180, rotationy: 90, rotationz: -180}
                    ],
                    arrows: []}
              ]});
              detailViews.push({id: 3, 
                camera: { x: -195, y: 190, z: 100}, 
                target: {x: -195, y: 190, z: 0}, 
                objectsToHide: [],
                array: [
                  {    
                    id: 1,          
                    tooltipPosition: new THREE.Vector3(-193.89, 224.96, -94.5),
                    text: 'LED Beleuchtung innen',
                    objectsToDisplay: [],
                    loadedObjectToDisplay: undefined,
                    second: false,
                    third: false,
                    arrowData: [],
                    arrows: undefined}
              ]});

            //OBJECTS
            loadModel("Design_3_glb/Register_WC", false, 0, 0, false,1,false,{value: false, childrenId: 0},'FRONT',null,'1. Registerwände versetzen: WC, Dusche, Waschtisch', false, 5000, 20);      
            loadModel("Design_3_glb/Register_Dusche", false, 0, 0, false,2,false,{value: false, childrenId: 0},'FRONT', null, null, false, 5000, 20);  
            loadModel("Design_3_glb/Register_Waschtisch", false, 0, 0, false,3,false,{value: false, childrenId: 0},'FRONT', null, null, false, 5000, 20);  
            loadModel("Design_3_glb/Fancoil", false, 0, 0, false,4,false,{value: false, childrenId: 0},'FRONT',null, '2. Fan Coil einbauen', false, 5000, 60);  
            loadModel("Design_3_glb/Duschtasse", false, 0, 0, false,5,false,{value: false, childrenId: 0},'TOP',null, '3. Duschtasse einbauen', false, 4000, 60);  
            loadModel("Design_3_glb/WC_Boden", false, 0, 0, false,6,false,{value: false, childrenId: 0},'TOP',null, '4. WC – Boden einbauen', false, 4000, 60);  
            loadModel("Design_3_glb/WC_Rueckwand", false, 0, 0, false,7,false,{value: true, childrenId: 1},'FRONT', '5. WC Modul einbauen', '5.1 Rückwand', true, 4000, 18);  
            loadModel("Design_3_glb/WC_Seitenwand", false, 0, 0, false,8,false,{value: true, childrenId: 0},'FRONT',null, '5.2 Seitenwand', true, 4000, 18);
            loadModel("Design_3_glb/Trennwand", false, 0, 0, true,9,false,{value: true, childrenId: 0},'FRONT',null, '5.3 Trennwand', true, 4000, 18);  
            loadModel("Design_3_glb/WC_Vorderwand", false, 0, 0, true,10,false,{value: true, childrenId: 0},'FRONT',null, '5.4 Vorderwand', true, 4000, 18);
            loadModel("Design_3_glb/WC_Decke_geschlossen", false, 0, 0, false,11,false,{value: false, childrenId: 0},'FRONT',null, '5.5 Decke inkl. Beleuchtung, Absaugung, Revisionsklappe', true, 4000, 18,true, 0,false, true, [7], 2);  
            loadModel("Design_3_glb/Dusche_Rueckwand", false, 0, 0, false,12,false,{value: true, childrenId: 1},'FRONT','6. Dusch Modul einbauen', '6.1 Rückwand', true, 4000, 40);  
            loadModel("Design_3_glb/Dusche_Seitenwand", false, 0, 0, true,13,false,{value: true, childrenId: 0},'RIGHT',null, '6.2 Seitenwand', true, 4000, 40);  
            loadModel("Design_3_glb/Dusche_Decke", false, 0, 0, false,14,false,{value: false, childrenId: 0},'FRONT',null, '6.3 Decke inkl. Beleuchtung, Absaugung, Revisionsklappe', true, 4000, 40, false, 2,false, true, [7], 2);  
            loadModel("Design_3_glb/Fliesenboden_weiss", false, 0, 0, false,15,false,{value: false, childrenId: 0},'TOP',null, '7. Badezimmerboden verlegen', false, 4000, 30, true, 2, true, false, undefined, undefined, true);  
            loadModel("Design_3_glb/Waschtisch_Verkleidung", false, 0, 0, false,16,false,{value: true, childrenId: 0},'FRONT',null, '8. Registerverkleidung Waschtisch einbauen', false, 4000, 30);  
            loadModel("Design_3_glb/restliche Verkleidung_rechts", false, 0, 0, false,17,false,{value: true, childrenId: 0, hideAll: false, except: ['V3_SanMod_Nature','V3_SanMod_Stripes','V3_SanMod_Woods']},'RIGHT',null, '9. restliche Verkleidungen einbauen', false, 4000, 10, true, 1);
            loadModel("Design_3_glb/restliche Verkleidung_Abdeckbrett", false, 0, 0, false,18,false,{value: false, childrenId: 0},'TOP',null, null, true, 4000, 10);
            loadModel("Design_3_glb/restliche Verkleidung_links", false, 0, 0, false,19,false,{value: true, childrenId: 0},'RIGHT',null, null, true, 4000, 10);
            loadModel("Design_3_glb/Spiegel", false, 0, 0, false,20,false,{value: false, childrenId: 0},'FRONT',null, '10. Spiegel', false, 4000, 15, false, 3,false, true, [0], 3);  
            loadModel("Design_3_glb/Waschtischunterbau", false, 0, 0, false,21,false,{value: false, childrenId: 0},'FRONT',null, '11. Waschtischunterbau', false, 4000, 15, true, 3, true);
            loadModel("Design_3_glb/Tuere_WC", false, 0, 0, true,22,false,{value: true, childrenId: 0},'FRONT', null, '12. Tür Dusche', false, 4000, 30);
            loadModel("Design_3_glb/Tuere_Dusche", false, 0, 0, true,23,false,{value: true, childrenId: 0},'RIGHT',null, '13. Tür WC', false, 4000, 30);  
            loadModel("Design_3_glb/Waschbecken", false, 0, 0, false,24,false,{value: false, childrenId: 0},'TOP',null, '14. Waschbecken + Armatur', false, 4000, 30); 
            loadModel("Design_3_glb/WC", false, 0, 0, false,25,false,{value: false, childrenId: 0},'FRONT',null, '15. WC Keramik montieren', false, 4000, 30);  
            loadModel("Design_3_glb/Duscharmatur", false, 0, 0, false,26,false,{value: false, childrenId: 0},'FRONT',null, '16. Duscharmatur einbauen', false, 4000, 15); 
            loadModel("Design_3_glb/Zubehoer", false, 0, 0, false,27,false,{value: false, childrenId: 0},'TOP',null, '17. Zubehör montieren', false, 4000, 15);   
            loadModel("Design_3_glb/Deckenverkleidung_1", false, 0, 0, false,28,false,{value: false, childrenId: 0},'FRONT',null, '18. Deckenverkleidung', false, 4000, 15);
            loadModel("Design_3_glb/Deckenverkleidung_2", false, 0, 0, false,29,false,{value: false, childrenId: 0},'RIGHT',null, null, false, 4000, 15);

            //otherModels
            loadModel("Design_3_glb/WC_Decke_offen", true, 2, 11);
          break;
        case 4:
            console.log("==== GENERATE 4. DESIGN ====");
            numberOfModels = 34;
            $('#slider').prop('max', numberOfModels + 1);
            // $('#progress-block').css("display","");
            // $('#progress-bar').css("display","");

            //TEXTURES
            textures.push(
              {id: 1, name: 'V4_SanMod_Nature', displayName: 'NATURE', generatedTextureObjects: undefined, objectsToHide: undefined},
              {id: 2, name: 'V4_SanMod_Nomad', displayName: 'NOMAD', generatedTextureObjects: undefined, objectsToHide: undefined},
              {id: 3, name: 'V4_SanMod_Stripes', displayName: 'STRIPES', generatedTextureObjects: undefined, objectsToHide: undefined},
              {id: 4, name: 'V4_SanMod_Woods', displayName: 'INTO THE WOODS', generatedTextureObjects: undefined, objectsToHide: undefined});

            //DETAIL - VIEWS
            detailViews.push({id: 0,
              camera: { x: 40, y: 20, z: 110},
              target: {x: -50, y: -50, z: 0},
              objectsToHide: [],
              array: [
                { 
                  id: 1,   
                  tooltipPosition: new THREE.Vector3(21.8, 3.19, 89), 
                  text: 'Wandelemente werden in Nuten<br>eingefasst - somit wasserdicht!',
                  objectsToDisplay: [],
                  loadedObjectToDisplay: undefined,
                  second: false,
                  third: false,
                  arrowData: [],
                  arrows: undefined}
              ]});
            detailViews.push({id: 1, 
              camera: { x: -5, y: 10, z: -55},
              target: { x: 0, y: 5, z: -70},
              objectsToHide: [],
              array: [
                {  
                  id: 1,   
                  tooltipPosition: new THREE.Vector3(2.99, 4.3, -67.8), 
                  text: 'Eckprofil - somit wasserdicht!',
                  objectsToDisplay: [],
                  loadedObjectToDisplay: undefined,
                  second: false,
                  third: false,
                  arrowData: [],
                  arrows: undefined}
              ]});
              detailViews.push({id: 2,
                camera: { x: -18, y: 200, z: 130}, 
                target: {x: 50, y: 232, z: 20}, 
                objectsToHide: [],
                array: [
                  {
                    id: 1,   
                    tooltipPosition: new THREE.Vector3(20, 216.9, 89.9), 
                    text: 'Strahler',
                    objectsToDisplay: [],
                    loadedObjectToDisplay: undefined,
                    second: false,
                    third: false,
                    arrowData: [],
                    arrows: []},
                  { 
                    id: 2,
                    tooltipPosition: new THREE.Vector3(45.8, 234, 85), 
                    text: 'indirekte LED - Beleuchtung',
                    objectsToDisplay: [],
                    loadedObjectToDisplay: undefined,
                    second: false,
                    third: false,
                    arrowData: [],
                    arrows: undefined},
                  { 
                    id: 3,
                    tooltipPosition: new THREE.Vector3(40.69, 233.9, 88), 
                    text: 'Absaugung über Decke',
                    objectsToDisplay: [],
                    loadedObjectToDisplay: undefined,
                    second: true,
                    third: false,
                    arrowData: [
                      {positionx: 30, positiony: 225, positionz: 90, rotationx: 180, rotationy: -110, rotationz: -30},
                      {positionx: 90, positiony: 230, positionz: 45, rotationx: 180, rotationy: -100, rotationz: -30}
                    ],
                    arrows: []},
                  { 
                    id: 4,
                    tooltipPosition: new THREE.Vector3(63, 238, 72), 
                    text: 'Revisionsklappe',
                    objectsToDisplay: [],
                    loadedObjectToDisplay: undefined,
                    second: false,
                    third: true,
                    arrowData: [
                      {positionx: 30, positiony: 227, positionz: 90, rotationx: 180, rotationy: 90, rotationz: -180}
                    ],
                    arrows: []}
              ]});
              detailViews.push({id: 3, 
                camera: { x: -35, y: 176, z: 120}, 
                target: {x: -167, y: 176, z: 120}, 
                objectsToHide: [],
                array: [
                  {    
                    id: 1,          
                    tooltipPosition: new THREE.Vector3(-168.79, 204.76, 114.37),
                    text: 'LED Beleuchtung innen',
                    objectsToDisplay: [],
                    loadedObjectToDisplay: undefined,
                    second: false,
                    third: false,
                    arrowData: [],
                    arrows: undefined}
              ]});

            //OBJECTS
            loadModel("Design_4_glb/Register_WC", false, 0, 0, false,1,false,{value: false, childrenId: 0},'FRONT',null,'1. Registerwände versetzen: WC, Dusche, Waschtisch', false, 5000, 20);      
            loadModel("Design_4_glb/Register_Dusche", false, 0, 0, false,2,false,{value: false, childrenId: 0},'FRONT', null, null, false, 5000, 20);  
            loadModel("Design_4_glb/Register_Waschtisch", false, 0, 0, false,3,false,{value: false, childrenId: 0},'LEFT', null, null, false, 5000, 20);  
            loadModel("Design_4_glb/Fancoil", false, 0, 0, false,4,false,{value: false, childrenId: 0},'FRONT',null, '2. Fan Coil einbauen', false, 5000, 60);  
            loadModel("Design_4_glb/Duschtasse", false, 0, 0, false,5,false,{value: false, childrenId: 0},'TOP',null, '3. Duschtasse einbauen', false, 4000, 60);  
            loadModel("Design_4_glb/WC_Boden", false, 0, 0, false,6,false,{value: false, childrenId: 0},'TOP',null, '4. WC – Boden einbauen', false, 4000, 60);  
            loadModel("Design_4_glb/WC_Rueckwand", false, 0, 0, false,7,false,{value: true, childrenId: 1},'FRONT', '5. WC Modul einbauen', '5.1 Rückwand', true, 4000, 18);  
            loadModel("Design_4_glb/WC_Seitenwand", false, 0, 0, false,8,false,{value: true, childrenId: 0},'FRONT',null, '5.2 Seitenwand', true, 4000, 18);
            loadModel("Design_4_glb/WC_Trennwand", false, 0, 0, true,9,false,{value: true, childrenId: 0},'FRONT',null, '5.3 Trennwand', true, 4000, 18);  
            loadModel("Design_4_glb/WC_Vorderwand", false, 0, 0, true,10,false,{value: true, childrenId: 0},'FRONT',null, '5.4 Vorderwand', true, 4000, 18);
            loadModel("Design_4_glb/WC_Decke_geschlossen", false, 0, 0, false,11,false,{value: false, childrenId: 0},'FRONT',null, '5.5 Decke inkl. Beleuchtung, Absaugung, Revisionsklappe', true, 4000, 18,true, 0,false, true, [7], 2);  
            loadModel("Design_4_glb/Dusche_Rueckwand", false, 0, 0, false,12,false,{value: true, childrenId: 2},'FRONT','6. Dusch Modul einbauen', '6.1 Rückwand', true, 4000, 18);  
            loadModel("Design_4_glb/Dusche_Seitenwand", false, 0, 0, false,13,false,{value: true, childrenId: 1},'RIGHT',null, '6.2 Seitenwand', true, 4000, 18);  
            loadModel("Design_4_glb/Dusche_Trennwand", false, 0, 0, true,14,false,{value: true, childrenId: 99, hideAll: true,},'RIGHT',null, '6.3 Trennwand', true, 4000, 18);  
            loadModel("Design_4_glb/Dusche_Vorderwand", false, 0, 0, true,15,false,{value: true, childrenId: 0},'RIGHT',null, '6.4 Vorderwand', true, 4000, 18, true, 1);  
            loadModel("Design_4_glb/Dusche_Decke", false, 0, 0, false,16,false,{value: false, childrenId: 0},'FRONT',null, '6.5 Decke inkl. Beleuchtung, Absaugung, Revisionsklappe', true, 4000, 18, false, 2,false, true, [7], 2);  
            loadModel("Design_4_glb/restliche_Verkleidung_Dusche", false, 0, 0, false,17,false,{value: false, childrenId: 0, except: ['V4_SanMod_Nature','V4_SanMod_Stripes','V4_SanMod_Woods']},'RIGHT',null, '6.6 Dusche Verkleidung', true, 4000, 20);  
            loadModel("Design_4_glb/Waschtischboden", false, 0, 0, false,18,false,{value: false, childrenId: 0},'TOP',null, '7. Badezimmerboden verlegen', false, 4000, 30, true, 2, true, false, undefined, undefined, true);
            loadModel("Design_4_glb/Waschtisch_Verkleidung_vorne", false, 0, 0, false,19,false,{value: true, childrenId: 0},'LEFT',null, '8. Registerverkleidung Waschtisch einbauen', false, 4000, 30); 
            loadModel("Design_4_glb/Waschtisch_Verkleidung_hinten", false, 0, 0, false,20,false,{value: true, childrenId: 0},'RIGHT',null, null, false, 4000, 30);  
            loadModel("Design_4_glb/Waschtisch_Verkleidung_seite", false, 0, 0, false,21,false,{value: true, childrenId: 0},'FRONT',null, null, false, 4000, 30);   
            loadModel("Design_4_glb/restliche_Verkleidung_Abdeckbrett", false, 0, 0, false,22,false,{value: false, childrenId: 0},'TOP',null, null, true, 4000, 10); 
            loadModel("Design_4_glb/Spiegel", false, 0, 0, false,23,false,{value: false, childrenId: 0},'LEFT',null, '9. Spiegel', false, 4000, 15, false, 3,false, true, [2], 3);  
            loadModel("Design_4_glb/Waschtischunterbau", false, 0, 0, false,24,false,{value: false, childrenId: 0},'LEFT',null, '10. Waschtischunterbau', false, 4000, 15, true, 3, true);
            loadModel("Design_4_glb/Tuere_Dusche", false, 0, 0, true,25,false,{value: true, childrenId: 0},'FRONT', null, '11. Tür Dusche', false, 4000, 20);
            loadModel("Design_4_glb/Tuere_WC", false, 0, 0, true,26,false,{value: true, childrenId: 0},'FRONT',null, '12. Tür WC', false, 4000, 20);  
            loadModel("Design_4_glb/Waschbecken", false, 0, 0, false,27,false,{value: false, childrenId: 0},'TOP',null, '13. Waschbecken + Armatur', false, 4000, 20); 
            loadModel("Design_4_glb/WC", false, 0, 0, false,28,false,{value: false, childrenId: 0},'FRONT',null, '14. WC Keramik montieren', false, 4000, 30);  
            loadModel("Design_4_glb/Duscharmatur", false, 0, 0, false,29,false,{value: false, childrenId: 0},'FRONT',null, '15. Duscharmatur einbauen', false, 4000, 15); 
            loadModel("Design_4_glb/Zubehoer", false, 0, 0, false,30,false,{value: false, childrenId: 0},'TOP',null, '16. Zubehör montieren', false, 4000, 15);   
            loadModel("Design_4_glb/Deckenverkleidung_1", false, 0, 0, false,31,false,{value: false, childrenId: 0},'FRONT',null, '17. Deckenverkleidung', false, 4000, 5);
            loadModel("Design_4_glb/Deckenverkleidung_2", false, 0, 0, false,32,false,{value: false, childrenId: 0},'RIGHT',null, null, false, 4000, 5);
            loadModel("Design_4_glb/Deckenverkleidung_3", false, 0, 0, false,33,false,{value: false, childrenId: 0},'FRONT',null, null, false, 4000, 5);
            loadModel("Design_4_glb/Deckenverkleidung_4", false, 0, 0, false,34,false,{value: false, childrenId: 0},'RIGHT',null, null, false, 4000, 5);

            //otherModels
            loadModel("Design_4_glb/WC_Decke_offen", true, 2, 11);
            break;
        default:
            console.log("==== NO DESIGN CHOSEN? ====");
          break;
      }
}