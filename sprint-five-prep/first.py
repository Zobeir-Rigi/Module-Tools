# ✍️exercise
# Predict what double("22") will do. Then run the code and check.
#  Did it do what you expected? no
#  Why did it return the value it did? it just concatenated (repeated) the string. I expected it returns 44, but there is type issue.


def double(value):
    return value * 2 


print(double("22"))