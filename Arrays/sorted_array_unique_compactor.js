// Given a sorted array of integers, remove the duplicates in-place such that each element appears only once and return the new length. Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
//
function SortedArrayUniqueCompactor(arr) {
  // vou percorrer o array e comparar cada elemento com o próximo, se forem iguais eu removo o próximo

  for (let i = 0; i < arr.length; i++) {
    let valorAtual = arr[i];
    let valorProximo = arr[i + 1];
    if (valorAtual === valorProximo) {
      arr.splice(i + 1, 1);
      i--;
    }
  }

  return arr.length;
}
