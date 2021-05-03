
function nilai (mtk,bInd,bIng,ipa) {
    average=(mtk+bInd+bIng+ipa)/4
    console.log(`Rata rata = ${average}`)
    if (average >=90){
        console.log(`Grade = A`)
    }
    else if  (average >=80){
        console.log(`Grade = B`)
    }
    else if  (average >=70){
        console.log(`Grade = C`)
    }
    else if  (average >=60){
        console.log(`Grade = D`)
    }
    else {
        console.log(`Grade = E`)
    }

}
nilai(100,90,80,60)