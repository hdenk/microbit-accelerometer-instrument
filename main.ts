input.onButtonPressed(Button.A, function () {
    drum.note(69, music.beat(BeatFraction.Whole))
})
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
input.onButtonPressed(Button.B, function () {
    glockenspiel.note(41, music.beat(BeatFraction.Whole))
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
let drum: midi.MidiController = null
let glockenspiel: midi.MidiController = null
midi.useRawSerial()
basic.showIcon(IconNames.EigthNote)
let piano = midi.channel(1)
piano.setInstrument(MidiInstrument.AcousticGrandPiano)
glockenspiel = midi.channel(2)
glockenspiel.setInstrument(MidiInstrument.Glockenspiel)
drum = midi.channel(3)
drum.setInstrument(DrumSound.AcousticBassDrum)
