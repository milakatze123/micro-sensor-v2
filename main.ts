input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    mode += 1
    if (mode == 8) {
        mode = 1
    }
    basic.showNumber(mode)
})
function Compass(degrees: number) {
    if (degrees < 45) {
        basic.showString("N")
    } else if (degrees < 135) {
        basic.showString("E")
    } else if (degrees < 225) {
        basic.showString("S")
    } else if (degrees < 315) {
        basic.showString("W")
    }
}
input.onButtonPressed(Button.AB, function () {
    input.calibrateCompass()
})
let mode = 0
mode = 1
basic.forever(function () {
    if (mode == 1) {
        led.plotBarGraph(
            input.soundLevel(),
            255,
            true
        )
    } else if (mode == 2) {
        led.plotBarGraph(
            input.lightLevel(),
            255,
            true
        )
    } else if (mode == 3) {
        Compass(input.compassHeading())
    } else if (mode == 4) {
        led.plotBarGraph(
            input.temperature(),
            50,
            false
        )
    } else if (mode == 5) {
        basic.showString("X")
        for (let index = 0; index < 10; index++) {
            led.plotBarGraph(
                input.acceleration(Dimension.X),
                1023,
                true
            )
            basic.pause(100)
        }
    } else if (mode == 6) {
        basic.showString("Y")
        for (let index = 0; index < 10; index++) {
            led.plotBarGraph(
                input.acceleration(Dimension.Y),
                1023,
                true
            )
            basic.pause(100)
        }
    } else if (mode == 7) {
        basic.showString("Z")
        for (let index = 0; index < 10; index++) {
            led.plotBarGraph(
                input.acceleration(Dimension.Z),
                1023,
                true
            )
            basic.pause(100)
        }
    }
})
