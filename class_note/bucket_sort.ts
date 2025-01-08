/*
    instead of create n 'real' buckets, we use an array to record freq of digits
    then insert number from right to left if the (same as first in first out)
    current element from orginal arr should go to index as the freqArr freqArr[n] - 1 && freqArr[n]--
*/