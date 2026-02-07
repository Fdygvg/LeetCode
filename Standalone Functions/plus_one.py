def plusOne(digits):
        return list (map(int, (str(int("".join(map(str, digits)))+1))))
