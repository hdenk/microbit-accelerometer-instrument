input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    midi.playTone(330, music.beat(BeatFraction.Whole))
    midi.playTone(392, music.beat(BeatFraction.Whole))
    midi.playTone(392, music.beat(BeatFraction.Double))
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    midi.playTone(330, music.beat(BeatFraction.Whole))
    midi.playTone(294, music.beat(BeatFraction.Whole))
    midi.playTone(262, music.beat(BeatFraction.Whole))
    midi.playTone(294, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    midi.playTone(330, music.beat(BeatFraction.Whole))
    midi.playTone(330, music.beat(BeatFraction.Whole))
    midi.playTone(330, music.beat(BeatFraction.Double))
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    midi.playTone(294, music.beat(BeatFraction.Whole))
    midi.playTone(294, music.beat(BeatFraction.Whole))
    midi.playTone(294, music.beat(BeatFraction.Double))
})
midi.useRawSerial()
basic.showIcon(IconNames.EigthNote)
