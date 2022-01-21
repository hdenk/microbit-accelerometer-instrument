def on_button_pressed_a():
    drum.note(69, music.beat(BeatFraction.WHOLE))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_logo_up():
    basic.show_leds("""
        . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
    """)
    midi.play_tone(330, music.beat(BeatFraction.WHOLE))
    midi.play_tone(392, music.beat(BeatFraction.WHOLE))
    midi.play_tone(392, music.beat(BeatFraction.DOUBLE))
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def on_gesture_tilt_left():
    basic.show_leds("""
        . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
    """)
    midi.play_tone(330, music.beat(BeatFraction.WHOLE))
    midi.play_tone(294, music.beat(BeatFraction.WHOLE))
    midi.play_tone(262, music.beat(BeatFraction.WHOLE))
    midi.play_tone(294, music.beat(BeatFraction.WHOLE))
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_button_pressed_b():
    midi.channel(14).note(41, music.beat(BeatFraction.WHOLE))
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_tilt_right():
    basic.show_leds("""
        . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
    """)
    midi.play_tone(330, music.beat(BeatFraction.WHOLE))
    midi.play_tone(330, music.beat(BeatFraction.WHOLE))
    midi.play_tone(330, music.beat(BeatFraction.DOUBLE))
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def on_gesture_logo_down():
    basic.show_leds("""
        . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
    """)
    midi.play_tone(294, music.beat(BeatFraction.WHOLE))
    midi.play_tone(294, music.beat(BeatFraction.WHOLE))
    midi.play_tone(294, music.beat(BeatFraction.DOUBLE))
input.on_gesture(Gesture.LOGO_DOWN, on_gesture_logo_down)

drum: midi.MidiController = None
midi.use_raw_serial()
basic.show_icon(IconNames.EIGTH_NOTE)
piano = midi.channel(1)
piano.set_instrument(MidiInstrument.ACOUSTIC_GRAND_PIANO)
glockenspiel = midi.channel(2)
glockenspiel.set_instrument(MidiInstrument.GLOCKENSPIEL)
drum = midi.channel(3)
drum.set_instrument(DrumSound.ACOUSTIC_BASS_DRUM)