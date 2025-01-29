function NumberClick()
{
    var n=document.getElementById("NumText").value;
    var result=document.getElementById("result");
    var error=document.getElementById("error");

    if(isNaN(n))
     {
        error.innerHTML=`Please enter Number`;
     }
     
    if (n === 0) return 'Zero';

        number = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
        double_digit = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
        tens = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
       
        function translate(n)
        {

            word = ""
            if (n < 10) {  
                word = number[n] + ' ';
                result.innerHTML=`${word}`;
            }
            else if (n < 20) {
                word = double_digit[n - 10] + ' ';
                result.innerHTML=`${word}`;
            }
            else if (n < 100) {
                rem = translate(n % 10);
                word = tens[(n - n % 10) / 10 - 2] + ' ' + rem;
                result.innerHTML=`${word}`;
            }
            else if (n < 1000) {
                word = number[Math.trunc(n / 100)] + ' Hundred '  + translate(n % 100);
                result.innerHTML=`${word}`;
            }
            return word;
        }
         translate(n);
       
    }

