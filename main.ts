let x = 0
input.onGesture(Gesture.Shake, function () {
    if (x == 0) {
        basic.showIcon(IconNames.SmallSquare)
        music.play(music.stringPlayable("E G E F G F G B ", 207), music.PlaybackMode.UntilDone)
    } else if (x == 1) {
        basic.showIcon(IconNames.Square)
        music.play(music.stringPlayable("C5 B A B G F C5 - ", 201), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.Scissors)
        music.play(music.stringPlayable("G F A E G A D C ", 201), music.PlaybackMode.UntilDone)
    }
    x = randint(0, 2)
})
