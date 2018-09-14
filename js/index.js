window.onload=function(){
    // let arr1,arr2;
    // arr1=localStorage.arr1?localStorage.arr1.split(","):[];
    // arr2=localStorage.arr2?localStorage.arr2.split(","):[];
    let arr1,arr2;
    arr1=localStorage.arr1?localStorage.arr1.split(","):[];
    arr2=localStorage.arr2?localStorage.arr2.split(","):[];
    let input=document.querySelector("#input");
    let con=document.querySelector(".con");
    let con1=document.querySelector("#con1");
    let con2=document.querySelector("#con2");
    let num1=document.querySelector("#num1");
    let num2=document.querySelector("#num2");

    function upDate(){
        localStorage.arr1=arr1.join(",");
        localStorage.arr2=arr2.join(",");
        con1.innerHTML="";
        con2.innerHTML="";
        num1.innerHTML=arr1.length;
        num2.innerHTML=arr2.length;
        arr1.forEach((items,i)=>{
            let conBox=document.createElement("div");
            conBox.className="conBox";
            let input=document.createElement("input");
            input.setAttribute("type","checkbox");
            input.onclick=function(){
                arr2.unshift(arr1[i]);
                arr1.splice(i,1);
                upDate();
            }
            let p=document.createElement("p");
            p.innerText=items;
            p.ondblclick=function(){
                let input1=document.createElement("input");
                input1.className="in";
                input1.value=p.innerText;
                p.innerText="";
                p.appendChild(input1);
                input1.focus();
                input1.onblur=function(){
                    p.innerHTML=this.value;
                    arr1.splice(i,1,this.value);
                    upDate();
                }
            }
            let deletes=document.createElement("div");
            deletes.className="delete";
            deletes.innerText="-";
            conBox.appendChild(input);
            conBox.appendChild(p);
            conBox.appendChild(deletes);
            con1.appendChild(conBox);
        })
        arr2.forEach((items,v)=>{
            let conBox=document.createElement("div");
            conBox.className="conBox conBox1";
            let input=document.createElement("input");
            input.setAttribute("type","checkbox");
            input.setAttribute("checked","checked");
            con2.appendChild(conBox);
            input.onclick=function(){
                arr1.unshift(arr2[v]);
                arr2.splice(v,1);
                upDate();
            }
            let p=document.createElement("p");
            p.innerText=items;
            p.ondblclick=function(){
                let input1=document.createElement("input");
                input1.className="in";
                input1.value=p.innerText;
                p.innerText="";
                p.appendChild(input1);
                input1.focus();
                input1.onblur=function(){
                    p.innerHTML=this.value;
                    arr2.splice(v,1,this.value);
                    upDate();
                }
            }
            let deletes=document.createElement("div");
            deletes.className="delete";
            deletes.innerText="-";
            conBox.appendChild(input);
            conBox.appendChild(p);
            conBox.appendChild(deletes);
            con2.appendChild(conBox);

        })

        let delete1=document.querySelectorAll("#con1 .delete");
        Delete(delete1,arr1);
        let delete2=document.querySelectorAll("#con2 .delete");
        Delete(delete2,arr2);
        function Delete(deleteN,arr){
            deleteN.forEach((ele,i)=>{
                ele.onclick=function(){
                    // let delete11=ele.parentNode;
                    // delete11.parentNode.removeChild(delete11);
                    arr.splice(i,1);
                    upDate();
                }
            })

        }

        input.onkeydown=function(e){
            if (e.keyCode==13&&this.value!=""){
                arr1.unshift(this.value);
                this.value="";
                upDate();
            }
        }

    }
    upDate();

}