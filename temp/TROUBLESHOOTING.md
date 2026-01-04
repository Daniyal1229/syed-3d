# 🔧 Troubleshooting Guide

## Current Issue: 3D Objects Not Visible

### Quick Fixes Applied:

1. ✅ **Removed Font References** - Some Text components had font paths that don't exist
2. ✅ **Added Debug Mode** - Press 'D' key to enable debug helpers
3. ✅ **Added OrbitControls** - For manual camera testing in debug mode

---

## How to Debug:

### Step 1: Enable Debug Mode
1. Open the app in browser
2. Press the **'D' key** on your keyboard
3. You should see:
   - Grid on the ground
   - Red cube at origin (0,0,0)
   - Green cube at car start position (0,0,5)
   - Axis helper (X=red, Y=green, Z=blue)
4. Use mouse to orbit camera around

### Step 2: Check Browser Console
1. Press **F12** to open DevTools
2. Go to **Console** tab
3. Look for errors (red text)
4. Common errors:
   - "Failed to load font" - FIXED
   - "Cannot read property of undefined" - Need to fix
   - "THREE.WebGLRenderer" errors - GPU issue

### Step 3: Check What's Rendering
With debug mode on:
- Can you see the grid? → Scene is working
- Can you see red/green cubes? → Geometry is rendering
- Can you see the ground (green plane)? → City meshes should work
- Can you move camera with mouse? → OrbitControls working

---

## Common Issues & Solutions:

### Issue: Only Blue Sky Visible
**Cause:** Objects positioned incorrectly or camera too far
**Solution:**
- Enable debug mode (Press D)
- Check if cubes are visible
- If cubes visible but ground not = Ground component issue
- If nothing visible = Camera/positioning issue

### Issue: Text Components Not Rendering
**Cause:** Missing fonts or emoji in Text components
**Fix Applied:** Removed font paths, simplified text

### Issue: Objects Render But Car Doesn't Move
**Cause:** Keyboard events not captured
**Solution:**
- Click on the 3D canvas first
- Make sure browser window has focus
- Check console for errors

### Issue: Performance - Low FPS
**Solutions:**
- Reduce shadow quality
- Reduce particle count in Weather.jsx
- Disable weather effects
- Use simpler geometries

---

## Production Checklist:

### Before Deployment:
- [ ] Remove debug mode or hide it (change key to something uncommon)
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile (will need touch controls)
- [ ] Check console for any errors
- [ ] Test all zones and popups
- [ ] Verify day/night toggle works
- [ ] Test weather effects
- [ ] Optimize assets (if any images/models added)

### Performance Optimization:
```javascript
// In Experience.jsx
<Environment preset="sunset" background={false} /> // Don't use as background
```

```javascript
// Reduce shadows quality
<Canvas 
  shadows={{
    type: THREE.PCFSoftShadowMap
  }}
  camera={{ position: [0, 5, 10], fov: 60 }}
/>
```

---

## Debug Checklist:

Run through these in order:

1. **Page Loads**
   - [ ] Loading screen appears
   - [ ] Progress bar fills to 100%
   - [ ] Screen fades out

2. **Scene Appears**
   - [ ] Blue sky visible
   - [ ] UI elements visible (map, buttons, controls)

3. **3D Content** (Press D for debug mode)
   - [ ] Grid visible
   - [ ] Red cube at origin visible
   - [ ] Green cube at (0,0,5) visible
   - [ ] Can orbit camera with mouse

4. **Without Debug Mode**
   - [ ] Ground (green plane) visible
   - [ ] Roads (gray) visible
   - [ ] Red car visible
   - [ ] Buildings visible
   - [ ] Entrance gate visible

5. **Controls**
   - [ ] Arrow Up moves car forward
   - [ ] Arrow Down moves car backward
   - [ ] Arrow Left/Right turns car
   - [ ] Camera follows car smoothly

6. **Features**
   - [ ] Drive into zones triggers popups
   - [ ] Close popup with X button
   - [ ] Day/Night toggle works
   - [ ] Weather effects work
   - [ ] Mini-map updates

---

## If Nothing Works:

### Nuclear Option - Simplify Everything:

1. Comment out complex components in Experience.jsx
2. Start with just ground and car
3. Add components one by one
4. Find which one breaks it

### Example Minimal Scene:
```javascript
// Experience.jsx - Minimal version
export default function Experience() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      
      {/* Ground */}
      <mesh rotation={[-Math.PI/2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="green" />
      </mesh>
      
      {/* Test car */}
      <mesh position={[0, 0.5, 5]}>
        <boxGeometry args={[1, 1, 2]} />
        <meshStandardMaterial color="red" />
      </mesh>
      
      <OrbitControls />
    </>
  )
}
```

If this works, gradually add back:
1. Car component
2. Roads
3. Buildings
4. Effects

---

## Contact Info for Errors:

When reporting issues, include:
1. Browser name and version
2. Console error messages (copy full error)
3. Screenshot of what you see
4. What you tried from this guide

---

## Next Steps:

1. Try debug mode first (Press D)
2. Check console errors
3. Report findings
4. Will provide specific fix based on error


