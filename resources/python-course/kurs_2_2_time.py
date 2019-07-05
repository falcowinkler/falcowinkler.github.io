import time

weekdays = {
    0: "Montag",
    1: "Dienstag",
    2: "Mittwoch",
    3: "Donnerstag",
    4: "Freitag",
    5: "Samstag",
    6: "Sonntag"
}

def get_weekday(date_string):
    parsed_date = time.strptime(date_string, "%d.%m.%Y")
    return weekdays[parsed_date.tm_wday]

test_datum = "09.08.1665"
print("Der", test_datum, "war ein", get_weekday(test_datum))
# Der 09.08.1665 war ein Sonntag
