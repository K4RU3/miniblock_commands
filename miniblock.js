export default function getMiniblockCommands(scale){
    var num = scale

    var any = num.toString() //スケール
    var pos = "pos" + any //アマスタ
    var tempBlock = "tempBlock" + any //インタラクション
    var ItemName = "miniblock" + any //アイテム名
    var scale = (1/num).toString()
    var half_scale = (1/num/2).toString()

    var test = `kill @e[tag=${tempBlock}]
execute as @a[nbt={SelectedItem:{tag:{display:{Name:'"${ItemName}"'}}}}] at @s anchored eyes run summon armor_stand ^ ^ ^1 {NoGravity:true, Tags:["${pos}"]}
execute as @e[tag=${pos}] store result entity @s Pos[0] double ${scale} run data get entity @s Pos[0] ${any}
execute as @e[tag=${pos}] store result entity @s Pos[1] double ${scale} run data get entity @s Pos[1] ${any}
execute as @e[tag=${pos}] store result entity @s Pos[2] double ${scale} run data get entity @s Pos[2] ${any}
execute as @e[tag=${pos}] at @s run summon interaction ~${half_scale} ~ ~${half_scale} {width:${scale}f, height:${scale}f, Tags:["${tempBlock}"]}
kill @e[tag=${pos}]
execute as @e[type=item, nbt={Item:{tag:{display:{Name:'"${ItemName}"'}}}}] at @e[tag=${tempBlock}] run summon block_display ~-${half_scale} ~ ~-${half_scale} {Tags:["${ItemName}"], transformation:{left_rotation:[0f,0f,0f,1f], right_rotation:[0f,0f,0f,1f], translation:[0f,0f,0f], scale:[${scale}f,${scale}f,${scale}f]}}
execute as @e[tag=${ItemName}, nbt={block_state:{Name:"minecraft:air"}}] run data modify entity @s block_state.Name set from entity @p Inventory[{Slot:-106b}].id
kill @e[type=item, nbt={Item:{tag:{display:{Name:'"${ItemName}"'}}}}]`

    test = test.split('\n')
    return test
}