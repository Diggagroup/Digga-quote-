
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600&display=swap');
:root{
  --blue:#1a5299;--blue-dark:#0f3a6e;--blue-mid:#1e63b8;
  --blue-light:#e8f0fb;--blue-pale:#f0f5ff;
  --white:#fff;--bg:#eef2f9;--text:#0d1f3c;--muted:#6b7a99;--border:#c8d6ee;
  --green:#1b7a3e;--orange:#e65100;--red:#c62828;
  --safe-top:env(safe-area-inset-top,0px);--safe-bottom:env(safe-area-inset-bottom,0px);
}
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}
body{background:var(--bg);font-family:'Barlow',sans-serif;color:var(--text);min-height:100vh;}
.header{background:linear-gradient(135deg,var(--blue-dark),var(--blue));padding:0 14px;padding-top:var(--safe-top);position:sticky;top:0;z-index:100;box-shadow:0 3px 18px rgba(15,58,110,.45);}
.header-inner{display:flex;align-items:center;justify-content:space-between;padding:10px 0 12px;gap:10px;border-bottom:3px solid rgba(255,255,255,.25);}
.logo-wrap{background:white;border-radius:6px;padding:5px 10px;display:flex;align-items:center;flex-shrink:0;max-width:150px;box-shadow:0 2px 8px rgba(0,0,0,.2);}
.logo-wrap img{height:36px;width:auto;}
.header-badge{background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);border-radius:20px;padding:4px 12px;font-size:.72rem;color:white;font-weight:600;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;}
.header-badge.admin{background:rgba(255,255,255,.2);}
.header-badge.estimator{background:rgba(27,122,62,.5);border-color:rgba(27,122,62,.8);}
.header-badge.customer{background:rgba(26,82,153,.4);}
.container{max-width:700px;margin:0 auto;padding:14px 12px calc(40px + var(--safe-bottom));}
.job-id-bar{background:var(--blue-dark);color:white;text-align:center;padding:8px;font-family:'Barlow Condensed',sans-serif;font-size:.85rem;letter-spacing:1px;}
.job-id-bar span{color:#a8d4ff;font-weight:700;}
.section{background:var(--white);border-radius:10px;margin-bottom:12px;overflow:hidden;box-shadow:0 2px 10px rgba(26,82,153,.1);border-left:4px solid var(--blue);}
.section-header{background:var(--blue);color:white;padding:12px 14px;font-family:'Barlow Condensed',sans-serif;font-size:1.05rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;display:flex;align-items:center;gap:8px;cursor:pointer;user-select:none;}
.section-header .chevron{margin-left:auto;transition:transform .25s;font-style:normal;font-size:.75rem;opacity:.65;}
.section-header.collapsed .chevron{transform:rotate(-90deg);}
.section-body{padding:16px;overflow:hidden;transition:max-height .3s ease,padding .3s ease;max-height:2500px;}
.section-body.collapsed{max-height:0;padding-top:0;padding-bottom:0;}
.field-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;}
.field{display:flex;flex-direction:column;gap:5px;}
.field label{font-size:.63rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--muted);}
.field input,.field textarea,.field select{border:1.5px solid var(--border);border-radius:6px;padding:11px 12px;font-family:'Barlow',sans-serif;font-size:.95rem;color:var(--text);background:var(--blue-pale);transition:border-color .2s,box-shadow .2s;width:100%;-webkit-appearance:none;}
.field input:focus,.field textarea:focus,.field select:focus{outline:none;border-color:var(--blue);background:white;box-shadow:0 0 0 3px rgba(26,82,153,.12);}
.field textarea{resize:vertical;min-height:80px;}
.field input:read-only,.field textarea:read-only{background:#f8f8f8;color:#999;border-color:#e0e0e0;}
.check-group{display:flex;flex-wrap:wrap;gap:7px;}
.check-item{display:flex;align-items:center;gap:8px;cursor:pointer;padding:9px 13px;border:1.5px solid var(--border);border-radius:7px;transition:all .12s;user-select:none;font-size:.88rem;min-height:44px;background:var(--blue-pale);}
.check-item input[type=checkbox]{appearance:none;-webkit-appearance:none;width:22px;height:22px;border:2px solid var(--border);border-radius:5px;cursor:pointer;position:relative;flex-shrink:0;transition:all .12s;background:white;}
.check-item input[type=checkbox]:checked{background:var(--blue);border-color:var(--blue);}
.check-item input[type=checkbox]:checked::after{content:"";position:absolute;left:5px;top:2px;width:8px;height:12px;border:2.5px solid white;border-top:none;border-left:none;transform:rotate(45deg);}
.check-item.checked{border-color:var(--blue);background:var(--blue-light);color:var(--blue-dark);font-weight:600;}
.sub-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.sub-grid-3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;}
@media(max-width:480px){.sub-grid,.sub-grid-3,.field-row{grid-template-columns:1fr;}}
.sub-label{font-size:.63rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--blue-dark);margin-bottom:8px;padding-bottom:4px;border-bottom:2px solid var(--blue);display:inline-block;}
.divider{border:none;border-top:1px solid var(--border);margin:12px 0;}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:13px 24px;border:none;border-radius:6px;font-family:'Barlow Condensed',sans-serif;font-size:1rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:all .15s;width:100%;margin-top:8px;}
.btn:active{transform:scale(.97);}
.btn-primary{background:var(--blue);color:white;}
.btn-primary:hover{background:var(--blue-dark);}
.btn-success{background:var(--green);color:white;}
.btn-warning{background:var(--orange);color:white;}
.btn-outline{background:none;border:2px solid var(--border);color:var(--muted);}
.btn-outline:active{background:var(--blue-light);border-color:var(--blue);color:var(--blue-dark);}
.status-pill{display:inline-block;padding:3px 10px;border-radius:20px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;}
.status-new{background:#e3f2fd;color:#1565c0;}
.status-sent{background:#fff8e1;color:#f57f17;}
.status-inprogress{background:#e8f5e9;color:#2e7d32;}
.status-complete{background:#ede7f6;color:#4527a0;}
.upload-drop{border:2px dashed var(--border);border-radius:8px;padding:22px 14px;text-align:center;cursor:pointer;transition:all .2s;background:var(--blue-pale);}
.upload-drop:active,.upload-drop.drag-over{border-color:var(--blue);background:var(--blue-light);}
.upload-drop .up-icon{font-size:1.8rem;margin-bottom:6px;}
.upload-drop p{font-size:.8rem;color:var(--muted);}
.upload-drop p strong{color:var(--blue-dark);}
.photo-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px;}
.photo-thumb{position:relative;border-radius:6px;overflow:hidden;aspect-ratio:1;box-shadow:0 2px 8px rgba(26,82,153,.15);}
.photo-thumb img{width:100%;height:100%;object-fit:cover;}
.photo-thumb .remove-btn{position:absolute;top:4px;right:4px;background:rgba(15,58,110,.75);color:white;border:none;width:24px;height:24px;border-radius:50%;cursor:pointer;font-size:12px;display:flex;align-items:center;justify-content:center;}
.caption-input{font-size:.7rem;border:1px solid var(--border);border-radius:3px;padding:3px 6px;width:100%;margin-top:4px;font-family:'Barlow',sans-serif;-webkit-appearance:none;background:var(--blue-pale);}
.info-banner{background:var(--blue-light);border:1px solid var(--blue);border-radius:8px;padding:12px 14px;margin-bottom:14px;font-size:.82rem;color:var(--blue-dark);}
.info-banner strong{display:block;font-size:.85rem;margin-bottom:3px;}
.spinner{display:none;width:20px;height:20px;border:3px solid rgba(255,255,255,.3);border-top-color:white;border-radius:50%;animation:spin .8s linear infinite;}
@keyframes spin{to{transform:rotate(360deg);}}
.loading .spinner{display:inline-block;}
#toast{position:fixed;bottom:calc(18px + var(--safe-bottom));left:50%;transform:translateX(-50%) translateY(80px);padding:10px 20px;border-radius:20px;font-size:.82rem;font-weight:600;z-index:999;transition:transform .3s;white-space:nowrap;box-shadow:0 4px 18px rgba(0,0,0,.25);}
#toast.show{transform:translateX(-50%) translateY(0);}
#toast.toast-info{background:var(--blue-dark);color:white;border-left:3px solid white;}
#toast.toast-success{background:var(--green);color:white;}
#toast.toast-error{background:var(--red);color:white;}
.footer{text-align:center;padding:20px 14px 6px;font-size:.62rem;color:var(--muted);letter-spacing:1px;text-transform:uppercase;}
