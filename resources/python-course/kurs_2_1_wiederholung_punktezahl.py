
def gesamtpunktzahl(loesungen, antworten):
    punktezahl = 0
    for loesung, antwort in zip(loesungen, antworten):
        if loesung == antwort:
            punktezahl += 4
        else:
            punktezahl -= 1
    return punktezahl

loesungen = ["a", "a", "b", "b"]
antworten_von_klaus_peter = ["a", "c", "b", "d"]

print(gesamtpunktzahl(loesungen, antworten_von_klaus_peter))
