(function ($) {
    $.fn.temporizador = function(parametros) {
        
        const primeiroDigitoHora = $("<span>").html("0")
        const segundoDigitoHora = $("<span>").html("0")
        const primeiroDigitoMinuto = $("<span>").html("0")
        const segundoDigitoMinuto = $("<span>").html("0")
        const primeiroDigitoSegundo = $("<span>").html("0")
        const segundoDigitoSegundo = $("<span>").html("0")

        const separadorHoraMinuto = $("<span>").html(":")
        const separadorMinutoSegundo = $("<span>").html(":")

        $(this).append(primeiroDigitoHora, segundoDigitoHora, separadorHoraMinuto, primeiroDigitoMinuto, segundoDigitoMinuto, separadorMinutoSegundo, primeiroDigitoSegundo, segundoDigitoSegundo)

        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
        
        let segundos = 50
        let minutos = 59
        let horas = 1
        
        
        
        let cronometro = setInterval(() => {
        
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

            let horarioEmString = `${horasStringComZeroESlice}:${minutosStringComZeroESlice}:${segundosStringComZeroESlice}`

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
}) (jQuery)