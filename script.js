class Program {
    static startDate = new Date(2080, 0, 30);

    static calculateTimeSpan(startDate, endDate) {
        let comparison = endDate - startDate;
        let duration = comparison;
        return duration;
    }

    static calculateDays(duration) {
        let days = duration / (1000 * 60 * 60 * 24);
        return days;
    }

    static main() {
        const calculateTimeSpan = (start, end) => Program.calculateTimeSpan(start, end);
        const calculateDays = (duration) => Program.calculateDays(duration);

        const endDate = new Date(2080, 1, 10);


        const composedFunction = () => calculateDays(calculateTimeSpan(Program.startDate, endDate));

        const days = composedFunction();

        console.log(days);
    }
}

Program.main();
