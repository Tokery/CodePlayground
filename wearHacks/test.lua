scriptId = 'com.thalmic.examples.outputeverything'
scriptTitle = "Output Everything"
scriptDetailsUrl = "" -- We don't have this until it's submitted to the Myo Market

-- local http = require("socket.http")
-- local ltn12 = require("ltn12")
function onPoseEdge(pose, edge)
    myo.debug("onPoseEdge: " .. pose .. ", " .. edge)
end

function onPeriodic()
end

function onForegroundWindowChange(app, title)
    myo.debug("onForegroundWindowChange: " .. app .. ", " .. title)
    myo.debug("Hey")
    return true
end

function activeAppName()
    return "Output Everything"
end

function onActiveChange(isActive)
    myo.debug("onActiveChange")
end