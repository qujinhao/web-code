// JavaScript Document
   /*
            【注】创建一个带文本的元素节点
         */
function createElementWidthTxt(tagName, tx){
              var oText = document.createTextNode(tx);
              var node = document.createElement(tagName);
              node.appendChild(oText);
             return node;
         }








//插入到节点之后
 function insertAfter(newNode, oldNode){
            //判断oldNode是否是最后一个
            var parent = oldNode.parentNode;
            if(oldNode == parent.lastChild){
                //插入到oldnode的下一个节点
                parent.appendChild(newNode);
            }else{
                //插入到下一个节点之前
                parent.insertBefore(newNode, oldNode.nextSibling);
            }
        }