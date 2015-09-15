        $(document).ready(function () {
            //ここにJSを記述
            
            //var result;if ("result"="lose");
            
            $("#pc").html("test");

            
            //short

            function janken(hand){
                console.log("janken");
                x= hand;
                y= Math.floor(Math.random() * 3 + 1);

                win_count  = 0;
                lose_count = 0;
                same_count = 0;

                



                if (x-y==-1||x-y==2){
                    console.log("あなたの勝ちです");
                    win_count += 1;
                    $("#num").text(win_count+'勝' + lose_count + '負' + same_count +'分');
                }

               
                else if  (x-y==0){
                    console.log("あいこです");
                    same_count += 1;
                    $("#num").text(win_count+'勝' + lose_count + '負' + same_count +'分');
                }

                else{
                    console.log("あなたの負けです");
                    lose_count += 1;
                    $("#num").text(win_count+'勝' + lose_count + '負' + same_count +'分');
               }


               if (win_count == 3){
                console.log("あなたの勝ちです");
                $("#num").html("あなたの負けです");
               }
               }

               $("#cho_btn").on("click", function () {
                //alert("◯をクリック");
                janken(0);
                });
               $("#gu_btn").on("click", function () {
                //alert("◯をクリック");
                janken(1);
                });
               $("#par_btn").on("click", function () {
                //alert("◯をクリック");
                janken(2);
                });

        });