function shortcut(s1, s2) {
if (s1.length > 0 && s2.length > 0) {
        const initialLetters = s1[0].toUpperCase() + s2[0].toLowerCase();
        return initialLetters;
    } else {
        return '';
    }
}

// Do not change the code below.
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
// alert(shortcut(s1, s2));
