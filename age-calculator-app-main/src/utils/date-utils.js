export function validateDay(day) {
    if (day === "") {
        return "This field is required";
    }

    if (typeof day !== "number" || isNaN(day)) {
        return "This must be a valid number";
    }

    if (day > 31 || day < 1) {
        return "This must be a valid day";
    }

    return null;
}

export function validateMonth(month) {
    if (month === "") {
        return "This field is required";
    }

    if (typeof month !== "number" || isNaN(month)) {
        return "This must be a valid number";
    }

    if (month > 12 || month < 1) {
        return "This must be a valid month";
    }

    return null;
}

export function validateYear(year, currentYear) {
    if (year === "") {
        return "This field is required";
    }

    if (typeof year !== "number" || isNaN(year)) {
        return "This must be a valid number";
    }

    if (year > currentYear) {
        return "The year must be in the past";
    }

    return null;
}

export function isValidDate(year, month, day) {
    const date = createDate(year, month, day);

    return (
        date.getDate() === day &&
        date.getMonth() === month - 1 &&
        date.getFullYear() === year
    );
}

export function createDate(year, month, day) {
    const monthIndex = month - 1;
    return new Date(year, monthIndex, day, 0, 0, 0, 0);
}

export function daysInMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

export function dateDiff(date1, date2) {
    let years = date2.getFullYear() - date1.getFullYear();
    let months = date2.getMonth() - date1.getMonth();
    let days = date2.getDate() - date1.getDate();

    if (days < 0) {
        months -= 1;
        days = daysInMonth(date1) + days;
    }

    if (months < 0) {
        years -= 1;
        months = 12 + months;
    }

    return { years, months, days };
}
