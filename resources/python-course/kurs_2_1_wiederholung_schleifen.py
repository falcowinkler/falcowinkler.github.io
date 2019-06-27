n = 42
while n != 1:
    if n % 2 == 0:
        n //= 2 # Das Selbe wie n = n // 2
    else:
        n = n * 3 + 1
    print(n)
