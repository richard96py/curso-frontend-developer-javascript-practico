function chunkArrayInGroups(arr, size) {
    const result = [];
    let item;
    const flag =
    while(1 < 4){
      console.log("here");
      let subArray = [];
      for(let i = 0; i < size; i++ ){
        item = arr.shift();
        subArray.push(item);
      }
      result.push(subArray);
    }
    console.log(result)
   }
   
   chunkArrayInGroups(["a", "b", "c", "d"], 2);