# In dieser Übung wiederholt Ihr `while` - Schleifen, den Modulo - Operator `%` und Variablen.
# Aufgabe: Es soll eine gif - Animation mit einer Schleife programmiert werden. 
# Dafür habe ich euch eine Funktion `add_frame(i)` geschrieben. Diese zeigt das `i`-te Frame einer Animation an.
# Ihr sollt eine Animation mit 13 Frames in einer Endlosschleife abspielen. Dafür: 

# - Definiert euch eine Zählervariable i mit Anfangswert 0.
# - Schreibt eine `while` - Schleife, die abbrechen soll, wenn i den Wert 100 erreicht hat. (Bedingung: i ist kleiner 100)
# - In der Schleife sollen zwei Befehle stehen. 
#     - Einmal soll `add_frame()` mit dem richtigen Wert in der Klammer aufgerufen werden. Wir iterieren ja endlos von 0 bis 12 durch die Bilder. Hier können wir den Modulo - Operator verwenden um die Zählvariable `i` (die von 1 bis 1000 läuft) auf 0 bis 12 zu beschränken. 
#     - Die Zählvariable i muss um 1 erhöht werden

# Wenn ihr alles richtig gemacht habt, seht ihr eine Katze, die endlos aus einer Box springt.

# Dieser Befehl gibt euch die funktionen add_frame und start,
# Die ich für euch geschrieben habe um Bilder anzuzeigen.

# Wichtig: Leider funktioniert der Thonny "Debugger" (der Käfer) hier nicht.
# Führt euer Skript also bitte mit dem Run Knopf (oder F5) aus.

# Wenn Ihr das Käfer-Tool benutzen wollt koentet ihr
# Eure schleife in einer Seperaten Datei kopieren
# Und add_frame mit print ersetzen, das hilft vielleicht
# sorry for the inconvenience :(

from show_images import *

# # # # #

#  A B C

for i in range(13):
    add_frame(i)
    # i = 13

## Hier euer code, der add_frame(<gif-sequenznummer>) aufruft

start()

# start(repeat=True) spielt eure hinzugefügten Frames in einer Endlosschleife ab
# Das ziel ist es aber, diese Schleife selber zu Programmieren.
# Geschafft? Super!
# Weiterführend könnt ihr nun:
# - Die Katze rückwärts springen lassen
# - Die Animation schneller spielen (doppelte Geschwindingkeit, also jedes zweite Frame überspringen)
# - Die Katze abwechselnd raus und wieder zurück springen lassen
# - ...
# Hinweis: Wenn ihr möchtet könnt ihr eure eigene .gif herunterladen,
# in den ordner images packen und als mygif.gif umbenennen / die vorherige gif löschen ;)