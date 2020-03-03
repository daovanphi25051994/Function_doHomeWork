function findCentury(year) {
    let year1 = parseInt(year);
    if (year1 <= 100) {
        alert("Thế kỷ 1");
        return 1;
    }
    if (year1 % 100 === 0) {
        let century = (year1 / 100);
        alert("thế kỷ : " + century);
        return century;
    } else {
        let century = (year1 / 100) + 1;
        alert("thế kỷ : " + century);
        return century;
    }
}

findCentury(201);