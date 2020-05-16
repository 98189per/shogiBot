import os, sys
from PIL import Image

# Path to intl. pieces
intlPieces = {
    "l": "./resources/international/lance0.png",
    "+l": "./resources/international/lance_promoted0.png",
    "n": "./resources/international/horse0.png",
    "+n": "./resources/international/horse_promoted0.png",
    "s": "./resources/international/silver0.png",
    "+s": "./resources/international/silver_promoted0.png",
    "g": "./resources/international/gold0.png",
    "k": "./resources/international/king_w0.png",
    "+k": "./resources/international/king_w.png",
    "r": "./resources/international/rook0.png",
    "+r": "./resources/international/rook_promoted0.png",
    "b": "./resources/international/bishop0.png",
    "+b": "./resources/international/bishop_promoted0.png",
    "p": "./resources/international/pawn0.png",
    "+p": "./resources/international/pawn_promoted0.png",
    "P": "./resources/international/pawn.png",
    "+P": "./resources/international/pawn_promoted.png",
    "B": "./resources/international/bishop.png",
    "+B": "./resources/international/bishop_promoted.png",
    "R": "./resources/international/rook.png",
    "+R": "./resources/international/rook_promoted.png",
    "K": "./resources/international/king_b.png",
    "+K": "./resources/international/king_b0.png",
    "G": "./resources/international/gold.png",
    "S": "./resources/international/silver.png",
    "+S": "./resources/international/silver_promoted.png",
    "N": "./resources/international/horse.png",
    "+N": "./resources/international/horse_promoted.png",
    "L": "./resources/international/lance.png",
    "+L": "./resources/international/lance_promoted.png"   
}

# Path to trad. pieces
tradPieces = {
    "l": "./resources/traditional/kyousha0.png",
    "+l": "./resources/traditional/narikyou0.png",
    "n": "./resources/traditional/keima0.png",
    "+n": "./resources/traditional/narikei0.png",
    "s": "./resources/traditional/ginshou0.png",
    "+s": "./resources/traditional/narigin0.png",
    "g": "./resources/traditional/kinshou0.png",
    "k": "./resources/traditional/oushou0.png",
    "+k": "./resources/traditional/oushou.png",
    "r": "./resources/traditional/hisha0.png",
    "+r": "./resources/traditional/ryuuou0.png",
    "b": "./resources/traditional/kakugyou0.png",
    "+b": "./resources/traditional/ryuuma0.png",
    "p": "./resources/traditional/fuhyou0.png",
    "+p": "./resources/traditional/tokin0.png",
    "P": "./resources/traditional/fuhyou.png",
    "+P": "./resources/traditional/tokin.png",
    "B": "./resources/traditional/kakugyou.png",
    "+B": "./resources/traditional/ryuuma.png",
    "R": "./resources/traditional/hisha.png",
    "+R": "./resources/traditional/ryuuou.png",
    "K": "./resources/traditional/gyokushou.png",
    "+K": "./resources/traditional/gyokushou0.png",
    "G": "./resources/traditional/kinshou.png",
    "S": "./resources/traditional/ginshou.png",
    "+S": "./resources/traditional/narigin.png",
    "N": "./resources/traditional/keima.png",
    "+N": "./resources/traditional/narikei.png",
    "L": "./resources/traditional/kyousha.png",
    "+L": "./resources/traditional/kyousha.png"
}

# Pieces in hand columns
hand = {
    "l": 5,
    "n": 4,
    "s": 3,
    "g": 2,
    "r": 0,
    "b": 1,
    "p": 6,
    "P": 0,
    "B": 5,
    "R": 6,
    "G": 4,
    "S": 3,
    "N": 2,
    "L": 1
}

# Paths to numbers
numbers = {
    "combo": "./resources/numbers/combo.png",
    "0": "./resources/numbers/0.png",
    "1": "./resources/numbers/1.png",
    "2": "./resources/numbers/2.png",
    "3": "./resources/numbers/3.png",
    "4": "./resources/numbers/4.png",
    "5": "./resources/numbers/5.png",
    "6": "./resources/numbers/6.png",
    "7": "./resources/numbers/7.png",
    "8": "./resources/numbers/8.png",
    "9": "./resources/numbers/9.png"
}

# Presets for board/piece sizes
scale = 2
xOffset = 346 // scale
yOffset = 338 // scale
xBox = 164 // scale
yBox = 214 // scale
xSize = 99 // scale
ySize = 138 // scale
xCombo = 40 // scale
yCombo = 69 // scale
xHandOffset = 368 // scale
yHandOffset = 68 // scale
xHand = 226 // scale
boardBase = 0 // scale
boardHeight = 2296 // scale

def main(sfen,icon,filename): # draw board from sfen string
    if len(sfen) == 4:
        # Use intl. pieces
        if icon == "intl":
            pieces = intlPieces
        else:
            pieces = tradPieces

        # Open main board image
        if sfen[1].lower() == 'w':
            sfen[0] = sfen[0].swapcase()
            temp = ""
            size = len(sfen[0])
            while size > 0:
                size -= 1
                if sfen[0][size] == 'k':
                    temp += "+K"
                elif sfen[0][size] == 'K':
                    temp += "+k"
                elif sfen[0][size-1] == '+':
                    temp += "+" + sfen[0][size]
                    size -= 1
                else:
                    temp += sfen[0][size]
            sfen[0] = temp
            sfen[2] = sfen[2].swapcase()
            #sfen[2] = ''.join(reversed(temp))
            #raise Exception(sfen[0])
            board = Image.open("./resources/board0.png")
        else:
            board = Image.open("./resources/board.png")

        # Loop through string and generate
        pos = 0
        count = 0
        add = False
        while pos < 81:
            if sfen[0][count].isdigit():
                pos += int(sfen[0][count])
            elif sfen[0][count] == '/':
                count += 1
                continue
            elif sfen[0][count] == '+':
                count += 1
                piece = Image.open(pieces.get("+" + sfen[0][count]))
                add = True
                pos += 1
            else:
                piece = Image.open(pieces.get(sfen[0][count]))
                add = True
                pos += 1
            count += 1
            if add:
                r = (pos-1) % 9
                f = (pos-1) // 9
                square = (xOffset+r*xBox,yOffset+f*yBox)
                board.paste(piece,square,piece.convert("RGBA"))
                add = False

        # Loop through hand and generate
        add = False
        for i in range(len(sfen[2])):
            each = sfen[2][i]
            if each == '-':
                break
            elif each.isdigit():
                number = each
                if sfen[2][i+1].isdigit():
                    number = each + sfen[2][i+1]
                    i += 1
                add = True
            else:
                piece = Image.open(pieces.get(each)).resize((xSize,ySize))
                r = hand.get(each)
                f = boardBase if each.islower() else boardHeight
                square = (xHandOffset+r*xHand,yHandOffset+f)
                board.paste(piece,square,piece.convert("RGBA"))
                if add:
                    if int(number) < 10:
                        combo = Image.open(numbers.get("combo")).resize((xCombo,yCombo))
                        counter = Image.open(numbers.get(number)).resize((xCombo,yCombo))
                    else:
                        combo = Image.open(numbers.get(number[0])).resize((xCombo,yCombo))
                        counter = Image.open(numbers.get(number[1])).resize((xCombo,yCombo))
                    comboSquare = (xHandOffset+r*xHand+xSize,yHandOffset+f+ySize-yCombo)
                    counterSquare = (xHandOffset+r*xHand+xSize+xCombo,yHandOffset+f+ySize-yCombo)
                    if f == boardBase:
                        combo = combo.transpose(Image.ROTATE_180)
                        counter = counter.transpose(Image.ROTATE_180)
                    board.paste(combo,comboSquare,combo.convert("RGBA"))
                    board.paste(counter,counterSquare,counter.convert("RGBA"))
                    add = False

        # Save board as image
        board.save(filename)

# From shell or node (exec)
try:
    sfen = sys.argv[1:5]
    icon = sys.argv[5]
    filename = sys.argv[6]
except:
    sfen = sys.argv[1].split()[0:4]
    icon = sys.argv[1].split()[4]
    filename = sys.argv[1].split()[5]

# Call main function
main(sfen,icon,filename)