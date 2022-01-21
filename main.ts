input.onButtonPressed(Button.A, function () {
    if (instrument < INSTRUMENT_MAX) {
        instrument = instrument + 1
    }
    midi.channel(13).setInstrument(instrument)
    basic.showString("" + (instrument))
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    midi.channel(midiChannelNr).note(midi.frequencyToKey(330), music.beat(BeatFraction.Whole))
    midi.channel(midiChannelNr).note(midi.frequencyToKey(392), music.beat(BeatFraction.Whole))
    midi.channel(midiChannelNr).note(midi.frequencyToKey(392), music.beat(BeatFraction.Double))
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    midi.channel(midiChannelNr).note(midi.frequencyToKey(330), music.beat(BeatFraction.Whole))
    midi.channel(midiChannelNr).note(midi.frequencyToKey(294), music.beat(BeatFraction.Whole))
    midi.channel(midiChannelNr).note(midi.frequencyToKey(262), music.beat(BeatFraction.Whole))
    midi.channel(midiChannelNr).note(midi.frequencyToKey(294), music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    if (instrument > INSTRUMENT_MIN) {
        instrument = instrument - 1
    }
    midi.channel(13).setInstrument(instrument)
    basic.showString("" + (instrument))
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    midi.playDrum(DrumSound.AcousticBassDrum)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    midi.channel(midiChannelNr).note(midi.frequencyToKey(330), music.beat(BeatFraction.Whole))
    midi.channel(midiChannelNr).note(midi.frequencyToKey(330), music.beat(BeatFraction.Whole))
    midi.channel(midiChannelNr).note(midi.frequencyToKey(330), music.beat(BeatFraction.Double))
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    midi.channel(midiChannelNr).note(midi.frequencyToKey(294), music.beat(BeatFraction.Whole))
    midi.channel(midiChannelNr).note(midi.frequencyToKey(294), music.beat(BeatFraction.Whole))
    midi.channel(midiChannelNr).note(midi.frequencyToKey(294), music.beat(BeatFraction.Double))
})
let midiChannelNr = 0
let instrument = 0
let INSTRUMENT_MAX = 0
let INSTRUMENT_MIN = 0
midi.useRawSerial()
basic.showIcon(IconNames.EigthNote)
INSTRUMENT_MIN = 1
INSTRUMENT_MAX = 255
instrument = INSTRUMENT_MIN
midiChannelNr = 13
