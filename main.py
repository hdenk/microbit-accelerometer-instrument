def on_button_pressed_a():
    global instrument
    if instrument < INSTRUMENT_MAX:
        instrument = instrument - 1
    midi.channel(13).set_instrument(instrument)
    basic.show_leds("""
        . . . . .
                . . . . .
                . # # # .
                . . . . .
                . . . . .
    """)
    basic.pause(200)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_logo_up():
    basic.show_leds("""
        . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
    """)
    midi.channel(midiChannelNr).note(midi.frequency_to_key(330), music.beat(BeatFraction.WHOLE))
    midi.channel(midiChannelNr).note(midi.frequency_to_key(392), music.beat(BeatFraction.WHOLE))
    midi.channel(midiChannelNr).note(midi.frequency_to_key(392), music.beat(BeatFraction.DOUBLE))
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def on_gesture_tilt_left():
    basic.show_leds("""
        . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
    """)
    midi.channel(midiChannelNr).note(midi.frequency_to_key(330), music.beat(BeatFraction.WHOLE))
    midi.channel(midiChannelNr).note(midi.frequency_to_key(294), music.beat(BeatFraction.WHOLE))
    midi.channel(midiChannelNr).note(midi.frequency_to_key(262), music.beat(BeatFraction.WHOLE))
    midi.channel(midiChannelNr).note(midi.frequency_to_key(294), music.beat(BeatFraction.WHOLE))
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_button_pressed_ab():
    basic.show_string("" + str((instrument)))
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global instrument
    if instrument > INSTRUMENT_MIN:
        instrument = instrument + 1
    midi.channel(13).set_instrument(instrument)
    basic.show_leds("""
        . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
    """)
    basic.pause(200)
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    basic.show_leds("""
        . . # . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
    """)
    midi.play_drum(DrumSound.ACOUSTIC_BASS_DRUM)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_gesture_tilt_right():
    basic.show_leds("""
        . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
    """)
    midi.channel(midiChannelNr).note(midi.frequency_to_key(330), music.beat(BeatFraction.WHOLE))
    midi.channel(midiChannelNr).note(midi.frequency_to_key(330), music.beat(BeatFraction.WHOLE))
    midi.channel(midiChannelNr).note(midi.frequency_to_key(330), music.beat(BeatFraction.DOUBLE))
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def on_gesture_logo_down():
    basic.show_leds("""
        . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
    """)
    midi.channel(midiChannelNr).note(midi.frequency_to_key(294), music.beat(BeatFraction.WHOLE))
    midi.channel(midiChannelNr).note(midi.frequency_to_key(294), music.beat(BeatFraction.WHOLE))
    midi.channel(midiChannelNr).note(midi.frequency_to_key(294), music.beat(BeatFraction.DOUBLE))
input.on_gesture(Gesture.LOGO_DOWN, on_gesture_logo_down)

midiChannelNr = 0
instrument = 0
INSTRUMENT_MAX = 0
INSTRUMENT_MIN = 0
midi.use_raw_serial()
basic.show_icon(IconNames.EIGTH_NOTE)
INSTRUMENT_MIN = 1
INSTRUMENT_MAX = 255
instrument = INSTRUMENT_MIN
midiChannelNr = 13