export function getVerseFor(bottles){
    let bottleText = "bottles"


    if(bottles <= 2){

     bottleText = "bottle"
    }
    const verse = `${bottles} bottles of beer on the wall, ${bottles} bottles of beer. Take one down and pass it around, ${bottles - 1} ${bottleText} of beer on the wall`
    return verse
}