import { ref } from "vue";
import {
    validateDay,
    validateMonth,
    validateYear,
    createDate,
    isValidDate,
    dateDiff,
} from "../utils/date-utils";

export default function useAgeCalculator() {
    const dateValue = ref({ day: null, month: null, year: null });
    const isError = ref({ day: false, month: false, year: false });
    const dateMessages = ref({ day: null, month: null, year: null });

    const emptyValue = Object.freeze({ days: null, months: null, years: null });

    const difference = ref({ ...emptyValue });

    function onCalculate() {
        const date = new Date();

        const dayValue = parseInt(dateValue.value.day, 10);
        const monthValue = parseInt(dateValue.value.month, 10);
        const yearValue = parseInt(dateValue.value.year, 10);

        const dayErrors = validateDay(dayValue);
        const monthErrors = validateMonth(monthValue);
        const yearErrors = validateYear(yearValue, date.getFullYear());

        if (dayErrors || monthErrors || yearErrors) {
            difference.value = { ...emptyValue };
            isError.value = { day: dayErrors !== null, month: monthErrors !== null, year: yearErrors !== null };
            dateMessages.value = { day: dayErrors, month: monthErrors, year: yearErrors };
            return;
        }

        if (!isValidDate(yearValue, monthValue, dayValue)) {
            difference.value = { ...emptyValue };
            isError.value = { day: true, month: true, year: true };
            dateMessages.value = { day: "This is not a valid date", month: null, year: null };
            return;
        }

        const inputDate = createDate(yearValue, monthValue, dayValue);

        isError.value = { day: false, month: false, year: false };
        dateMessages.value = { day: null, month: null, year: null };

        difference.value = dateDiff(inputDate, date);
    }

    return {
        dateValue,
        onCalculate,
        isError,
        dateMessages,
        difference,
    };
}
