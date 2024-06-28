"use client"
import {useState} from "react"
import  io  from "socket.io-client"
const socket = io("http://localhost:5868");

export default function Chat(){
    const [sender,setSender] = useState("vortex")//Isso seria um prop
    const [msg,setMsg]=useState("Mensagem teste 1!")//Outro prop
    const [receiver,setReceiver] = useState("tst")//Outro prop
    const [room,setRoom]=useState(undefined)//Outro Prop

    const [dev,setDev] = useState("Template pro <p>");//Variável Dev, pode apagar
    const [dev2,setDev2] = useState("Template pro <span>");//Variável Dev, pode apagar

    function sendMessage():any{
        if(!room){
            return null;//ToDo: retornar algo que informe ao usuário algo próximo ao erro do socket.emit("requestRoom"
        }
        //Esse emit(message) tem q ser colocado em um botão, ou tirado daqui pq ele starta sempre sozinho KKKK, tipo, esse evento foi feito pensando pra ser emitido quando um botão for apertado msm
        socket.emit("message",sender,receiver,msg,room,async(res:number)=>{
        if(res==200){
            //ToDo: exibir msg no chat (pega o proprio conteúdo da página, não puxa do bd daí)
        }else{
            //ToDo: exibir popup de erro ao enviar msg
        }
    });
    }


    //tem que ser disparado ao clicar em qualquer chat na lista da esquerda
    function requestRoom(){
        socket.emit("requestRoom",sender,receiver,(res:number,room:any)=>{
        if(res==200){
            //ToDo: exibir popup de conexão com usuário bem sucedida
            setRoom(room)
            console.log(room)
        }else{
            //ToDo: exibir erro ao conectar com usuário
        }
    });}

    function requestMessages(){
        socket.emit("requestMessages",sender,receiver,(res:number,msgs:string)=>{
            if(res==200){
                //ToDo: exibir msgs, comparando senderId de cada mensagem com o meu próprio id para saber se a msg é minha e altera o balão, ou não é minha
            }else{
                //ToDo: informar erro ao receber mensagens do servidor
            }
        })
    }

    function createAccount(){
        socket.emit("createAccount","TesteFunc","tst","1234","tst@tst.com","21966665555","00000000","Rua Teste","666","Casarão",(res:number)=>{
            if(res==200){
                //ToDo: avisar na tela sucesso ao criar a conta
            }else{
                //ToDo: avisar erro ao criar conta
            }
        })
    }

    function loginTry(){
        socket.emit("loginTry","vortex","1234",(res:number)=>{
            if(res==200){
                //ToDo: Informar sucesso de login
            }else if(res=401){
                //ToDo: Informar senha errada
            }else{
                //ToDo: informar usuário não encontrado
            }
        })
    }
    

    socket.on("returnMessage",(content:string,hr:number,mn:number)=>{
        let hour = hr.toString()    
        let min = mn.toString()
        hour = hr < 10? "0"+hour : hour; 
        min = mn < 10? "0"+min : min;
        setDev(content)
        setDev2(`${hour}:${min}`)
    })

    socket.on("connect",()=>{
        //ToDo: Alguma saudação em popup se quiser, se não, deixa em branco

    });
    return(
        <>
        <h1>Chat</h1>
        <p id="cu">{dev}<br></br>
            <span id="hr">{dev2}</span>
        </p>
        <button onClick={sendMessage}>testMsg</button>
        <button onClick={requestRoom}>requestRoom</button>
        <button onClick={createAccount}>createAccountOneTimeTest</button>
        <button onClick={loginTry}>tryLogin</button>

        </>
    )
}