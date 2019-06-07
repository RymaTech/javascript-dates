import { format } from "../src/dateFormatter";

it('when the system date and the date to format are the same day formats as "TODAY"', () => {
  const december = 11; //js Date object month is indexed from 0
  const systemDateTime = new Date(2018, december, 15, 10, 5).getTime();
  const dateTimeToFormat = new Date(2018, december, 15, 12, 50).getTime(); //Same day different time
  expect(format(dateTimeToFormat, systemDateTime)).toBe("TODAY");
});

it('when the system date and the date to format are NOT the same day formats as "11/12/2018"', () => {
  const december = 11; //js Date object month is indexed from 0
  const systemDateTime = new Date(2018, december, 15, 10, 5).getTime();
  const dateTimeToFormat = new Date(2018, december, 11, 12, 50).getTime();
  expect(format(dateTimeToFormat, systemDateTime)).toBe("11/12/2018");
});

it('when the system date and the date to format are NOT the same day formats as "11/12/2018"', () => {
  const january = 0; //js Date object month is indexed from 0
  const systemDateTime = new Date(2018, january, 15, 10, 5).getTime();
  const dateTimeToFormat = new Date(2018, january, 11, 12, 50).getTime();
  expect(format(dateTimeToFormat, systemDateTime)).toBe("11/1/2018");
});

it("console.log Error is arguments are not numbers", () => {
  expect(format("11th December 2018", "11th December 2018")).toBe(
    "Error: arguments must be numbers"
  );
  expect(format(true, false)).toBe("Error: arguments must be numbers");
});
