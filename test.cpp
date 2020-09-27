#include <iostream>
using namespace std;

string vals[] = {"1 pence", "2 pence", "5 pence", "10 pence", "20 pence", "50 pence", "1 pound", "2 pounds", "5 pounds", "10 pounds", "20 pounds", "50 pounds"};
int valcoins[] = {1, 2, 5, 10, 20, 50, 100, 200, 500, 10000, 20000, 50000};

void func(float cp, float pp)
{
    string ans = "";
    if (int(cp - pp) < 0)
        cout << "ERROR\n";
    else if (int(cp - pp) == 0)
        cout << "ZERO\n";
    else
    {
        int val = (cp - pp) * 100;
        int i = 11;
        while (val > 0)
        {
            if (valcoins[i] > val)
                i--;
            else
            {
                val -= valcoins[i];
                ans += vals[i];
                ans += " ";
            }
        }
    }
    cout << ans << "\n";
}

int main()
{
    float cp, pp;
    cin >> cp >> pp;
    func(cp, pp);
    return 0;
}