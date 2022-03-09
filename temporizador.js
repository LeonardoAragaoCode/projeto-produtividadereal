(function ($) {
    
    let primeiroDigitoHora = 0
    let segundoDigitoHora = 0
    let primeiroDigitoMinuto = 0
    let segundoDigitoMinuto = 0
    let primeiroDigitoSegundo = 0
    let segundoDigitoSegundo = 0
    
    
    $.fn.temporizador = function(parametros) {
        
        primeiroDigitoHora = $("<span>").html("0")
        segundoDigitoHora = $("<span>").html("0")
        primeiroDigitoMinuto = $("<span>").html("0")
        segundoDigitoMinuto = $("<span>").html("0")
        primeiroDigitoSegundo = $("<span>").html("0")
        segundoDigitoSegundo = $("<span>").html("0")

        const separadorHoraMinuto = $("<span>").html(":")
        const separadorMinutoSegundo = $("<span>").html(":")

        $(this).append(primeiroDigitoHora, segundoDigitoHora, separadorHoraMinuto, primeiroDigitoMinuto, segundoDigitoMinuto, separadorMinutoSegundo, primeiroDigitoSegundo, segundoDigitoSegundo)

        return this
    }

    const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
    
    let segundos = 0
    let minutos = 0
    let horas = 0

    let cronometro
    let tempoEncerrado
    let horarioEmString

    $.fn.iniciarCronometro = function() {
        cronometro = setInterval(() => {

            segundos = segundos + 1
            
            if(segundos === 60) {
                segundos = 0
                minutos = minutos + 1 
            }
            if(minutos === 60){
                minutos = 0
                horas = horas + 1
            }

            let segundosString = segundos.toString()
            let minutosString = minutos.toString()
            let horasString = horas.toString()

            let segundosStringComZero = "0" + segundosString
            let segundosStringComZeroESlice = segundosStringComZero.slice(-2)
            let minutosStringComZero = "0" + minutosString
            let minutosStringComZeroESlice = minutosStringComZero.slice(-2)
            let horasStringComZero = "0" + horasString
            let horasStringComZeroESlice = horasStringComZero.slice(-2)

            horarioEmString = `${horasStringComZeroESlice}:${minutosStringComZeroESlice}:${segundosStringComZeroESlice}`

            let horarioRegex = regex.exec(horarioEmString)

            primeiroDigitoHora.html(horarioRegex[1][0])
            segundoDigitoHora.html(horarioRegex[1][1])
            primeiroDigitoMinuto.html(horarioRegex[2][0])
            segundoDigitoMinuto.html(horarioRegex[2][1])
            primeiroDigitoSegundo.html(horarioRegex[3][0])
            segundoDigitoSegundo.html(horarioRegex[3][1])

        }, 1000)
        return this
    }

    $.fn.pausarCronometro = function(){
        clearInterval(cronometro)
        return this
    }

    $.fn.encerrarCronometro = function (){
        clearInterval(cronometro)
        
        tempoEncerrado = regex.exec(horarioEmString)
        console.log(tempoEncerrado)

        primeiroDigitoHora.html("0")
        segundoDigitoHora.html("0")
        primeiroDigitoMinuto.html("0")
        segundoDigitoMinuto.html("0")
        primeiroDigitoSegundo.html("0")
        segundoDigitoSegundo.html("0")

        segundos = 0
        minutos = 0
        horas = 0

        return this
    }

    let materia 
    let assunto
    
    $.fn.capturarTexto = function(){
        materia = $('#campoMateria').val()
        assunto = $('#campoAssunto').val()
        console.log(materia)    
        console.log(assunto)
        return this
    }

    $.fn.registrador = function(){ 
        let registroAtual = $('<div>').html(function() {
            let agruparItens = materia + " - " + assunto + " - " + tempoEncerrado[0]
            return "<p>" + agruparItens + "</p>"
        })                                                                    
        $(this).append(registroAtual)
        return this
    }

    $.fn.limparCampos = function(){
        $('#campoMateria').val("")
        $('#campoAssunto').val("")
        return this
    }
}) (jQuery) 